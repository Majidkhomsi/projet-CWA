import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanierService } from '../../services/panier.service';
// Importez la classe Router depuis '@angular/router'
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  formulairePaiement: FormGroup;
  informationsPaiement: any = {};
  modalIsOpen: boolean = false;
  panier: any = [];
  afficherPaiement: boolean = false; // Variable pour afficher/masquer la section de paiement
  paiementAccepte: boolean = false;
  produitAchete: any = {};

  afficherConfirmation: boolean = false;
  constructor(public panierService: PanierService, private fb: FormBuilder, private router: Router) {
    this.formulairePaiement = this.fb.group({
      nom: ['', Validators.required],
      numeroCarte: [
        '',
        [
          Validators.required,
          this.validateCardNumber,
        ],
      ],
      moisExpiration: ['', Validators.required],
      anneeExpiration: [
        '',
        [Validators.required, Validators.min(2023), Validators.max(2030)],
      ],
      codeSecurite: ['', [Validators.required, Validators.maxLength(3)]],
    });
  }

  ngOnInit(): void {
    this.mettreAJourPanier();
  }

  validateCardNumber(control: any): { [key: string]: boolean } | null {
    const cardNumber = control.value;
    if (!/^[0-9]{14}$/.test(cardNumber)) {
      return { invalidCardNumber: true };
    }
    return null;
  }

  onNumeroCarteInput(event: any): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/[^0-9]/g, '').slice(0, 14); // Remove non-numeric characters and limit to 14 digits
    input.value = value;
    this.formulairePaiement.get('numeroCarte')?.setValue(value);
  }

  validerPaiement(): void {
    if (this.formulairePaiement.valid) {
      // Implémentez ici la logique de paiement

      // Réinitialisez les informations de paiement après le paiement
      this.informationsPaiement = {};

      // Vous pouvez également fermer la fenêtre modale ici si nécessaire
      this.modalIsOpen = false;

      // Définissez afficherConfirmation à vrai pour afficher la page de confirmation
      this.afficherConfirmation = true;

      // Redirigez l'utilisateur vers la page de confirmation de paiement (si nécessaire)
      this.router.navigateByUrl('/confirmation-paiement');
    } else {
      alert('Veuillez remplir tous les champs de paiement correctement.');
    }
  }

  ouvrirModal(): void {
    this.modalIsOpen = true;
  }

  viderPanier(): void {
    this.panierService.viderPanier();
    this.mettreAJourPanier();
    this.modalIsOpen = false;
    this.afficherPaiement = false; // Cacher la section de paiement lorsque le panier est vidé
  }

  private mettreAJourPanier(): void {
    this.panier = this.panierService.getPanier();
  }

  supprimerProduit(produit: any): void {
    if (produit.nom) {
      this.panierService.supprimerDuPanier(produit.nom);
      this.mettreAJourPanier();
    }
  }

  modifierQuantite(produit: any): void {
    const quantiteActuelle = produit.quantite ?? 0;
    if (produit.nom) {
      const nouvelleQuantite = prompt("Entrez la nouvelle quantité pour " + produit.nom, quantiteActuelle.toString());
      if (nouvelleQuantite !== null) {
        this.panierService.modifierQuantite(produit.nom, Number(nouvelleQuantite));
        this.mettreAJourPanier();
      }
    }
  }

  onKeyPress(event: KeyboardEvent): boolean {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  onKeyPressLetters(event: KeyboardEvent): boolean {
    const pattern = /^[a-zA-Z\s-]+$/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
}
