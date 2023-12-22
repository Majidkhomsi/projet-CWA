import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data-service.service'; // Importez votre service de données

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private estConnecteSource = new BehaviorSubject<boolean>(false);
  estConnecte$ = this.estConnecteSource.asObservable();
  private url = 'http://localhost:3000/utilisateurs';;

  constructor(private http: HttpClient) { }

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
    // Nettoyez le stockage local ou la session ici
  }
}
