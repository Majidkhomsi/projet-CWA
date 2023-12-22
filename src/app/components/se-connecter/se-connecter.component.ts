import { Component } from '@angular/core';
import { AuthService } from '../../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.css']
})
export class SeConnecterComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService,private router: Router) { }

  onConnexion() {
    if (this.email && this.password) {
      this.authService.connecter(this.email, this.password);
      this.router.navigate(['']);
    } else {
      alert('Veuillez entrer l\'e-mail et le mot de passe');
    }
  }
}
