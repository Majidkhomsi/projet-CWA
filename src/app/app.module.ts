import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Importez ReactiveFormsModule et FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueCartesGraphiquesComponent } from './components/catalogue-cartes-graphiques/catalogue-cartes-graphiques.component';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { DetailsCarteGraphiqueComponent } from './components/details-carte-graphique/details-carte-graphique.component';
import { PanierComponent } from './components/panier/panier.component';
import { CommandeComponent } from './components/commande/commande.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeConnecterComponent } from './components/se-connecter/se-connecter.component';
import { SInscrireComponent } from './components/s-inscrire/s-inscrire.component';
import { SuivieCommandeComponent } from './components/suivie-commande/suivie-commande.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogueCartesGraphiquesComponent,
    HeaderComponent,
    AccueilComponent,
    DetailsCarteGraphiqueComponent,
    PanierComponent,
    CommandeComponent,
    FooterComponent,
    SeConnecterComponent,
    SInscrireComponent,
    SuivieCommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule, 
  ],
 
  bootstrap: [AppComponent],
})
export class AppModule {}
