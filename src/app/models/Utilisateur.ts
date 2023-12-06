export class Utilisateur {
    id: number | undefined;
    nom: string;
    email: string;
    motDePasse: string; // Ajout du mot de passe
  
    constructor() {
      this.nom = '';
      this.email = '';
      this.motDePasse = '';
    }
  }