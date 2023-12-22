import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:3000/utilisateurs'; 

  constructor(public http: HttpClient) { }

  // Méthode pour créer un nouvel utilisateur
  creerUtilisateur(utilisateur: any): Observable<any> {
    return this.http.post(this.apiUrl, utilisateur);
  }

  // Méthode pour obtenir tous les utilisateurs
  obtenirUtilisateurs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
