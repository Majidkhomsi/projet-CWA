// suivie-commande.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from '../../services/commande.service'; // Importez le service approprié
import { AuthService } from '../../services/authentification.service';


@Component({
  selector: 'app-suivie-commande',
  templateUrl: './suivie-commande.component.html',
  styleUrls: ['./suivie-commande.component.css'],
})
export class SuivieCommandeComponent implements OnInit {
  commandes: any[] = [];
  commande: any; 
  constructor(
    private commandeService: CommandeService,
    private route: ActivatedRoute,
    private AuthService: AuthService
  ) {}

  ngOnInit(): void {
    const utilisateurId = this.AuthService.getUserId(); // Récupérez l'ID de l'utilisateur connecté
    this.commandeService.getCommandesUtilisateur().subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.commandes = data; // S'il y a des commandes, elles seront stockées ici
        } else {
          alert('Aucune commande trouvée pour cet utilisateur.');
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des commandes:', error);
      }
    );
  }
}
