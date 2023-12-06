import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public showAccountMenu = false;

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