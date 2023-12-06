import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue-cartes-graphiques',
  templateUrl: './catalogue-cartes-graphiques.component.html',
  styleUrls: ['./catalogue-cartes-graphiques.component.css']
})
export class CatalogueCartesGraphiquesComponent implements OnInit {

  // Exemple de tableau de cartes graphiques
  cartesGraphiques = [
    { nom: 'Carte Graphique A', description: 'Description A', prix: 299 },
    { nom: 'Carte Graphique B', description: 'Description B', prix: 399 },
    // Ajoutez d'autres cartes graphiques ici
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialisation du composant
  }

}

