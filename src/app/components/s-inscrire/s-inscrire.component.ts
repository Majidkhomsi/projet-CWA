import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../services/utilisateur.service'; 
import { AuthService } from '../../services/authentification.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s-inscrire',
  templateUrl: './s-inscrire.component.html',
  styleUrls: ['./s-inscrire.component.css']
})
export class SInscrireComponent implements OnInit {

  constructor(
    public utilisateurService: UtilisateurService,
    private authService: AuthService,
    private router: Router) { }
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid && form.value.password === form.value.confirmPassword) {
      this.utilisateurService.creerUtilisateur(form.value).subscribe(
        (data: any) => {
          console.log('Inscription réussie', data);
          this.authService.connecter(form.value.email,form.value.password);
          this.router.navigate(['']);
        },
        (error: any) => {
          console.error('Erreur lors de l\'inscription', error);
          // Gestion d'erreur
        }
      );
    } else {
      alert('Le formulaire n\'est pas valide ou les mots de passe ne correspondent pas');
    }
  }
}
