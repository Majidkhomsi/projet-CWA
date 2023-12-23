import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  // Déclaration des statuts de livraison
  statutsLivraison = [
    "En cours de préparation",
    "Expédiée",
    "En cours de livraison",
    "Livrée",
    "Retardée",
    "Annulée"
  ];

  constructor(private http: HttpClient, private authService: AuthService) { }
 
  getCommandesUtilisateur(): Observable<any[]> {
    const utilisateurId = this.authService.getUserId();
    const token = this.authService.getToken(); // Supposons que vous ayez une méthode pour obtenir le jeton d'authentification
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any[]>(`http://localhost:3000/commandes?utilisateurId=${utilisateurId}`, { headers: headers })
    .pipe(
      map(commandes => {
        return commandes.map(commande => ({
          ...commande,
          statut: this.statutsLivraison[Math.floor(Math.random() * this.statutsLivraison.length)]
        }));
      })
    );
  
  }   
  // Exemple de méthode pour obtenir une commande par son numéro
  getCommande(numero: string): any {
    // Implémentez la logique pour récupérer une commande depuis votre source de données (par exemple, un serveur ou un tableau en mémoire)
    // Retournez les données de la commande
    return {
      numero: numero,
      statut: this.statutsLivraison[Math.floor(Math.random() * this.statutsLivraison.length)],
      // Autres propriétés de la commande
    };
  }



  
}
