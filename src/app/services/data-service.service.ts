import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = '../../../bd.json';

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string) {
    // Remplacez cette logique en fonction de l'API ou du stockage de votre base de données JSON
    return this.http.get(`${this.dataUrl}?email=${email}`);
  }
}
