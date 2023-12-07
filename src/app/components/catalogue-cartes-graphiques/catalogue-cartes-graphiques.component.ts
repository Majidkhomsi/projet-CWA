import { Component, OnInit } from '@angular/core';
import { CarteGraphique } from '../../models/Carte-Graphique';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-catalogue-cartes-graphiques',
  templateUrl: './catalogue-cartes-graphiques.component.html',
  styleUrls: ['./catalogue-cartes-graphiques.component.css']
})
export class CatalogueCartesGraphiquesComponent implements OnInit {
  cartesGraphiques: CarteGraphique[] = [ {
    id: 1,
    nom: "NVIDIA RTX 3080",
    prix: 699.99,
    description: "Carte graphique haut de gamme idéale pour le gaming en 4K et le rendu professionnel.",
    marque: "NVIDIA",
    image: " ../../../../../assets/images/RTX3080.png",
    quantite:1
},
{
  id: 2,  
    nom: "AMD Radeon RX 6800 XT",
    prix: 649.99,
    description: "Offre d'excellentes performances en jeux grâce à son architecture RDNA 2.",
    marque: "AMD",
    image: "../../../../../assets/images/RX6800XT.png",
    quantite:1
},
{
  id: 3,
    nom: "NVIDIA RTX 3090",
    prix: 1499.99,
    description: "La plus puissante des cartes NVIDIA, parfaite pour le gaming extrême et la création 3D.",
    marque: "NVIDIA",
    image: "../../../../../assets/images/RTX3090.png",
    quantite:1
},
{
    id: 4,
    nom: "AMD Radeon RX 6900 XT",
    prix: 999.99,
    description: "Haut de gamme d'AMD, elle se mesure aux meilleures pour les jeux en 4K.",
    marque: "AMD",
    image: "../../../../../assets/images/RX6900XT.png",
    quantite:1
},
{
  id: 5,
  nom: "NVIDIA GTX 1660 Ti",
  prix: 279.99,
  description: "Une option abordable pour le gaming en 1080p, offrant un excellent rapport qualité-prix.",
  marque: "NVIDIA",
  image: "../../../../../assets/images/GTX1660Ti.png",
  quantite:1
},
{
  id: 6,
  nom: "AMD Radeon RX 580",
  prix: 229.99,
  description: "Idéale pour les jeux en 1080p, cette carte offre de bonnes performances pour un budget limité.",
  marque: "AMD",
  image: "../../../../../assets/images/RX580.png",
  quantite:1
},
{
  id: 7,
  nom: "NVIDIA RTX 3070",
  prix: 499.99,
  description: "Idéale pour les jeux en haute résolution, offrant un excellent rapport qualité-performance.",
  marque: "NVIDIA",
  image: "../../../../../assets/images/RTX3070.png",
  quantite:1
},
{
  id: 8,
  nom: "AMD Radeon RX 5600 XT",
  prix: 279.99,
  description: "Performante pour les jeux en 1080p, cible les gamers à budget moyen.",
  marque: "AMD",
  image: "../../../../../assets/images/RX5600XT.png",
  quantite:1
},
{
  id: 9, 
  nom: "NVIDIA GTX 1650 Super",
  prix: 159.99,
  description: "Entrée de gamme pour le gaming occasionnel, adaptée aux budgets serrés.",
  marque: "NVIDIA",
  image: "../../../../../assets/images/GTX1650SUPER.png",
  quantite:1
},
{
  id: 10,
  nom: "AMD Radeon RX 5500 XT",
  prix: 199.99,
  description: "Carte efficace pour les jeux en 1080p, bon choix pour les gamers débutants.",
  marque: "AMD",
  image: "../../../../../assets/images/RX5500XT.png",
  quantite:1
},
{
  id: 11,
  nom: "NVIDIA RTX 2060",
  prix: 349.99,
  description: "Bonne performance en 1080p et 1440p, adaptée au gaming de niveau intermédiaire.",
  marque: "NVIDIA",
  image: "../../../../../assets/images/RTX2060.png",
  quantite:1
},
{
  id: 12,
  nom: "AMD Radeon RX 570",
  prix: 139.99,
  description: "Très abordable, idéale pour les petits budgets et les jeux peu gourmands.",
  marque: "AMD",
  image: "../../../../../assets/images/RX570.png",
  quantite:1
},
{
  id: 13,
  nom: "NVIDIA GTX 1080 Ti",
  prix: 699.99,
  description: "Ancien haut de gamme, toujours compétitive pour le gaming en 4K.",
  marque: "NVIDIA",
  image: "../../../../../assets/images/GTX1080TI.png",
  quantite:1
},
{
  id: 14,
  nom: "AMD Radeon RX 6700 XT",
  prix: 479.99,
  description: "Équilibrée pour le gaming en 1440p, avec un bon support pour le ray tracing.",
  marque: "AMD",
  image: "../../../../../assets/images/RX6700XT.png",
  quantite:1
},
{
  id: 15,
  nom: "NVIDIA RTX 3050 Ti",
  prix: 259.99,
  description: "Entrée de gamme pour le ray tracing, convient aux jeux récents en 1080p.",
  marque: "NVIDIA",
  image: "../../../../../assets/images/RTX3050TI.png",
  quantite:1
},
{ id: 16,
  nom: "AMD Radeon RX 6600 XT",
  prix: 329.99,
  description: "Parfaite pour les jeux en 1080p avec des performances solides.",
  marque: "AMD",
  image: "../../../../../assets/images/RX6600XT.png",
  quantite:1
},
{ id: 17,
  nom: "NVIDIA GTX 1070",
  prix: 379.99,
  description: "Une option milieu de gamme fiable pour le gaming en 1440p.",
  marque: "NVIDIA",
  image: "../../../../../assets/images/GTX1070.png",
  quantite:1
},
{ id: 18,
  nom: "AMD Radeon VII",
  prix: 689.99,
  description: "Carte graphique haut de gamme d'AMD, adaptée pour les créateurs de contenu et les gamers.",
  marque: "AMD",
  image: "../../../../../assets/images/RADEONVII.png",
  quantite:1
},
{ id: 19,
  nom: "NVIDIA RTX 2080 Super",
  prix: 729.99,
  description: "Offre des performances exceptionnelles pour le gaming en 4K et le ray tracing.",
  marque: "NVIDIA",
  image: "../../../../../assets/images/RTX2080SUPER.png",
  quantite:1
},
{ id: 20,
  nom: "AMD Radeon RX 5300",
  prix: 159.99,
  description: "Carte d'entrée de gamme, adaptée pour les jeux en 1080p et les budgets limités.",
  marque: "AMD",
  image: "../../../../../assets/images/RX5300.png",
  quantite:1
}
]; // Initialisez avec des données réelles
  filtreMarque: string = '';
  filtrePrix: string = '';

  constructor(private panierService: PanierService) {}

  ngOnInit() {
    // Chargez les données de cartesGraphiques ici si nécessaire
  }

  get cartesGraphiquesFiltrees(): CarteGraphique[] {
    return this.cartesGraphiques.filter(gpu => {
      const correspondMarque = this.filtreMarque === '' || gpu.marque === this.filtreMarque;
      const correspondPrix = this.isPrixMatch(gpu.prix ||  0, this.filtrePrix);
      return correspondMarque && correspondPrix;
    });
  }

  isPrixMatch(prix: number, filtrePrix: string): boolean {
    if (filtrePrix === 'budget') {
        return prix < 300;
    } else if (filtrePrix === 'milieu') {
        return prix >= 300 && prix <= 600;
    } else if (filtrePrix === 'haut') {
        return prix > 600;
    }
    return true; // Pas de filtre appliqué
}


ajouterAuPanier(produit: CarteGraphique): void {
  this.panierService.ajouterAuPanier(produit);
                                               }
}
