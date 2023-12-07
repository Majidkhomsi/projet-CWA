import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../services/panier.service';
import { CarteGraphique } from '../../models/Carte-Graphique'; // Assurez-vous que ce chemin est correct

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier: CarteGraphique[] = []; // Déclaration de la propriété 'panier'

  constructor(public panierService: PanierService) { }

  ngOnInit(): void {
    this.mettreAJourPanier();
  }
  viderPanier(): void {
    this.panierService.viderPanier(); // Appelle la nouvelle méthode pour vider le panier
    this.mettreAJourPanier(); // Met à jour l'affichage du panier dans le composant
  }  
  private mettreAJourPanier(): void {
    this.panier = this.panierService.getPanier(); // Mise à jour du panier
  }

  supprimerProduit(produit: CarteGraphique): void {
    if (produit.nom) {
      this.panierService.supprimerDuPanier(produit.nom);
      this.mettreAJourPanier(); // Mise à jour du panier après suppression
    }
  }

  modifierQuantite(produit: CarteGraphique): void {
    const quantiteActuelle = produit.quantite ?? 0;
    if (produit.nom) {
      const nouvelleQuantite = prompt("Entrez la nouvelle quantité pour " + produit.nom, quantiteActuelle.toString());
      if (nouvelleQuantite !== null) {
        this.panierService.modifierQuantite(produit.nom, Number(nouvelleQuantite));
        this.mettreAJourPanier(); // Mise à jour du panier après modification
      }
    }
  }
  

}
