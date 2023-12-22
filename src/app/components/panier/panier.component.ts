import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PanierService } from '../../services/panier.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentification.service';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  formulairePaiement: FormGroup;
  formulaireLivraison: FormGroup;
  informationsPaiement: any = {};
  modalIsOpen: boolean = false;
  panier: any = [];
  afficherPaiement: boolean = false;
  afficherAdresse: boolean = false;
  paiementAccepte: boolean = false;
  afficherConfirmation: boolean = false;

  constructor(public panierService: PanierService, 
    private fb: FormBuilder,
    private authService: AuthService, 
    private http: HttpClient, 
    private router: Router
  ) {
    this.formulairePaiement = this.fb.group({
      nom: ['', Validators.required],
      numeroCarte: ['', [Validators.required, this.validateCardNumber]],
      moisExpiration: ['', Validators.required],
      anneeExpiration: ['', [Validators.required, Validators.min(2023), Validators.max(2030)]],
      codeSecurite: ['', [Validators.required, Validators.maxLength(3)]],
    });

    this.formulaireLivraison = this.fb.group({
      nomDestinataire: ['', Validators.required],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.mettreAJourPanier();
  }

  validateCardNumber(control: any): { [key: string]: boolean } | null {
    const cardNumber = control.value;
    if (!/^[0-9]{16}$/.test(cardNumber)) {
      return { invalidCardNumber: true };
    }
    return null;
  }

  onNumeroCarteInput(event: any): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/[^0-9]/g, '').slice(0, 16);
    input.value = value;
    this.formulairePaiement.get('numeroCarte')?.setValue(value);
  }

  validerPaiement(): void {
    if (this.formulairePaiement.valid && this.formulaireLivraison.valid) {
      const commande = {
        utilisateurId:this.authService.getUserId(),
        produits: this.panierService.getPanier(),
        informationsLivraison: this.formulaireLivraison.value,
        total: this.calculerTotal() // Calculez le total à partir des produits dans le panier
      };
  
      this.envoyerCommandeAuServeur(commande);
      this.viderPanier();
    } else {
      alert('Veuillez remplir tous les champs de paiement correctement.');
    }
  }

  ouvrirModal(): void {
    this.modalIsOpen = true;
  }

  viderPanier(): void {
    this.panierService.viderPanier(); // Appel à la méthode viderPanier du service
    this.mettreAJourPanier();
  }

  private envoyerCommandeAuServeur(commande: any): void {
    const utilisateurId = this.authService.getUserId();
    const commandeAvecUtilisateurId = { ...commande, utilisateurId: utilisateurId };
    const urlApi = 'http://localhost:3000/commandes';
    this.http.post(urlApi,  commandeAvecUtilisateurId).subscribe(
      response => {
        console.log('Commande enregistrée avec succès', response);
        this.afficherConfirmation = true;
        this.router.navigateByUrl('/suivi');
      },
      error => {
        console.error('Erreur lors de l\'enregistrement de la commande', error);
      }
    );
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

 
  
  private calculerTotal(): number {
    return this.panier.reduce((acc:number , produit:any) => acc + produit.prix * produit.quantite, 0);
  }
  
  
  
}
