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
  modalIsOpen = false;
  informationsPaiement: any = {};
  constructor(public panierService: PanierService) { }

  ngOnInit(): void {
    this.mettreAJourPanier();
  }
  viderPanier(): void {
    this.panierService.viderPanier(); // Appelle la nouvelle méthode pour vider le panier
    this.mettreAJourPanier(); // Met à jour l'affichage du panier dans le composant
    this.modalIsOpen = false;
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
  ouvrirModal(): void {
    this.modalIsOpen = true;
  }
  
  effectuerPaiement(): void {
    // Implémentez la logique pour effectuer le paiement ici en utilisant les informations de paiement
    // Une fois le paiement effectué, vous pouvez réinitialiser les informations de paiement et fermer la fenêtre modale
    this.informationsPaiement = {};
    this.modalIsOpen = false;

  }
  envoyerEmailConfirmation(): void {
    // Créez un objet d'email avec les informations nécessaires
    const email = {
      destinataire: this.informationsPaiement.email, // Adresse email du client
      sujet: "Confirmation de commande",
      contenu: `
        Merci pour votre achat sur GPUGalaxy !
  
        Détails de la commande :
        - Montant total : ${this.panierService.getTotal()} EUR
        - Produits commandés : ${this.panierService.getPanier().map(produit => produit.nom).join(", ")}
  
        La livraison sera effectuée à l'adresse suivante :
        ${this.informationsPaiement.adresseLivraison}
  
        Merci de votre confiance et à bientôt !
      `,
    };
  
    // Ici, vous devrez utiliser un service d'envoi d'emails pour envoyer cet email au client.
    // Assurez-vous d'utiliser les paramètres de configuration appropriés pour le service d'envoi d'emails que vous utilisez.
    // Par exemple, vous pourriez utiliser un service comme Nodemailer pour Node.js.
  
    // Après avoir envoyé l'email, vous pouvez afficher un message de confirmation supplémentaire à l'utilisateur si nécessaire.
    alert("Un email de confirmation a été envoyé à votre adresse.");
  
    // Réinitialisez les informations de paiement ou effectuez d'autres actions nécessaires
    this.reinitialiserInformationsPaiement();
  }
  reinitialiserInformationsPaiement(): void {
    // Réinitialisez les informations de paiement en les vidant
    this.informationsPaiement = {
      nom: "",
      numeroCarte: "",
      moisExpiration: "",
      anneeExpiration: "",
      codeSecurite: "",
      email: "",
      adresseLivraison: "",
    };
  }
  
  validerPaiement(): void {
    // Vérification des champs de paiement
    if (this.informationsPaiement.nom && this.informationsPaiement.numeroCarte && this.informationsPaiement.moisExpiration && this.informationsPaiement.anneeExpiration && this.informationsPaiement.codeSecurite) {
      // Les champs sont corrects, affichez un message de félicitation
      alert("Félicitations ! Votre paiement a été validé. Vous recevrez un email de confirmation avec les détails de la livraison.");
      
      // Ensuite, vous pouvez envoyer un email de confirmation au client
      this.envoyerEmailConfirmation();
  
      // Réinitialisez les informations de paiement ou faites d'autres actions nécessaires
      this.reinitialiserInformationsPaiement();
    } else {
      // Affichez un message d'erreur si les champs ne sont pas corrects
      alert("Veuillez remplir tous les champs de paiement correctement.");
    }
  }
  
}
