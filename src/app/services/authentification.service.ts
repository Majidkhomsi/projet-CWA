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
    return this.userId;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  connecter(email: string, password: string) {
    const requestBody = {
      email: email,
      password: password
    };

    
    return this.http.post(this.url, requestBody).subscribe(
      (response: any) => {
        // Traitement en cas de succès
        console.log('Réponse de connexion:', response);
        this.estConnecteSource.next(true);
      },
      (error) => {
        // Gestion des erreurs
        console.error('Erreur lors de la connexion:', error);
      }
    );
  }

  deconnecter() {
    this.estConnecteSource.next(false);
    this.router.navigate(['']);
  }
}
