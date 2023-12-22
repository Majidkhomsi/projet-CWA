import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private estConnecteSource = new BehaviorSubject<boolean>(false);
  estConnecte$ = this.estConnecteSource.asObservable();
  private url = 'http://localhost:3000/utilisateurs';;
  private userId!: number;
  constructor(private http: HttpClient,private router: Router) { }

  setUserId(id: number) {
    this.userId = id;
  }

  getUserId(): number {
    return Number(localStorage.getItem('userId'));
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  connecter(email: string, password: string) {
    // URL de l'API pour vérifier l'utilisateur
    const urlVerification = `${this.url}?email=${email}&password=${password}`;
  
    this.http.get(urlVerification).subscribe(
      (response: any) => {
        const users = response as any[];
        if (users.length) {
          // Utilisateur trouvé, procéder à la connexion
          console.log('Utilisateur connecté:', users[0]);
          this.estConnecteSource.next(true);
          localStorage.setItem('userId', users[0].id);
        } else {
          // Utilisateur non trouvé, afficher un message d'erreur
          alert('Identifiants incorrects');
        }
      },
      (error) => {
        // Gestion des erreurs de la requête
        console.error('Erreur lors de la vérification de lutilisateur:', error);
      }
    );
  }
  

  deconnecter() {
    this.estConnecteSource.next(false);
    localStorage.removeItem('userId');
    this.router.navigate(['']);
  }
}
