import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importez vos composants ici
import { AccueilComponent } from './components/accueil/accueil.component';
import { CatalogueCartesGraphiquesComponent } from './components/catalogue-cartes-graphiques/catalogue-cartes-graphiques.component';
import { PanierComponent } from './components/panier/panier.component';
import { CommandeComponent } from './components/commande/commande.component';
import { SeConnecterComponent } from './components/se-connecter/se-connecter.component';
import { SInscrireComponent } from './components/s-inscrire/s-inscrire.component';
import { SuivieCommandeComponent } from './components/suivie-commande/suivie-commande.component';
// Continuez à importer d'autres composants au besoin

const routes: Routes = [
  { path: '', component: AccueilComponent }, // Route pour l'accueil
  { path: 'catalogue', component: CatalogueCartesGraphiquesComponent }, // Route pour le catalogue
  { path: 'panier', component: PanierComponent }, // Route pour le panier
  { path: 'commande', component: CommandeComponent }, // Route pour la commande
  { path: 'inscription', component: SInscrireComponent },
  { path: 'connexion', component: SeConnecterComponent},
  { path: 'suivi', component:SuivieCommandeComponent},
  // Ajoutez d'autres routes au besoin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
