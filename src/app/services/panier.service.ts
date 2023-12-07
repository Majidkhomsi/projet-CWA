import { Injectable } from '@angular/core';
import { CarteGraphique } from '../models/Carte-Graphique';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier: CarteGraphique[] = [];

  ajouterAuPanier(produit: CarteGraphique): void {
    const produitExistant = this.panier.find(item => item.nom === produit.nom);
    if (produitExistant) {
      produitExistant.quantite = (produitExistant.quantite || 0) + 1;
    } else {
      this.panier.push({...produit, quantite: 1});
    }
  }

  getPanier(): CarteGraphique[] {
    return this.panier;
  }

  getTotal(): number {
    return this.panier.reduce((total, produit) => total + (produit.prix || 0) * (produit.quantite || 0), 0);
  }

  getNombreTotalProduits(): number {
    return this.panier.reduce((total, produit) => total + (produit.quantite || 0), 0);
  }
  supprimerDuPanier(nomProduit: string): void {
    this.panier = this.panier.filter(produit => produit.nom !== nomProduit);
  }

  modifierQuantite(nomProduit: string, nouvelleQuantite: number): void {
    const produit = this.panier.find(item => item.nom === nomProduit);
    if (produit && nouvelleQuantite > 0) {
      produit.quantite = nouvelleQuantite;
    } else if (produit && nouvelleQuantite === 0) {
      this.supprimerDuPanier(nomProduit);
    }
  }
  viderPanier(): void {
    this.panier = []; // Réinitialise le tableau du panier
  }
}
