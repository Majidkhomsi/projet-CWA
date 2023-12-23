import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  // Informations de la commande (exemple simplifié)
  commande: any = {
    articles: [
      { nom: 'Carte Graphique A', prix: 299, quantite: 1 },
      { nom: 'Carte Graphique B', prix: 399, quantite: 2 }
    ],
    total: 1097
  };

  constructor() { }

  ngOnInit(): void {
    
  }

}
