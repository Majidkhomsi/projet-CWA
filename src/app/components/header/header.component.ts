import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { AuthService } from '../../services/authentification.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public showAccountMenu = false;
  private unsubscribe$ = new Subject<void>();

  estConnecte: boolean= true ;
  constructor(private authService: AuthService, private panierService: PanierService) { }

  ngOnInit(): void {
    this.authService.estConnecte$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((estConnecte) => {
        this.estConnecte = estConnecte;
      });
  }

  deconnexion() {
    this.panierService.viderPanier();
    this.authService.deconnecter();
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    // Effectuez une assertion de type pour 'target' comme un élément HTML
    const target = event.target as HTMLElement;

    // Si le clic est en dehors du menu, cachez-le
    if (target && !target.matches('.compte, .compte *')) {
      this.showAccountMenu = false;
    }
  }

  public toggleAccountMenu(event: MouseEvent): void {
    // Empêche le clic de se propager au document
    event.stopPropagation();
    this.showAccountMenu = !this.showAccountMenu;
  }
}