import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthService } from '../../partage/services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule
  ]
})
export class InscriptionComponent implements OnInit {
  inscriptionForm!: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.inscriptionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      telephone: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      dateNaissance: [''],
      adresse: [''],
      ville: [''],
      codePostal: ['', [Validators.pattern(/^[0-9]{5}$/)]],
      profession: [''],
      accepterCGU: [false, [Validators.requiredTrue]],
      accepterNewsletter: [false]
    }, { validators: this.passwordMatchValidator });
  }

  // Validateur personnalisé pour vérifier que les mots de passe correspondent
  private passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    
    return null;
  }

  // Getters pour faciliter l'accès aux contrôles du formulaire
  get email() { return this.inscriptionForm.get('email'); }
  get password() { return this.inscriptionForm.get('password'); }
  get confirmPassword() { return this.inscriptionForm.get('confirmPassword'); }
  get nom() { return this.inscriptionForm.get('nom'); }
  get prenom() { return this.inscriptionForm.get('prenom'); }
  get telephone() { return this.inscriptionForm.get('telephone'); }
  get codePostal() { return this.inscriptionForm.get('codePostal'); }
  get accepterCGU() { return this.inscriptionForm.get('accepterCGU'); }

  async onSubmit(): Promise<void> {
    if (this.inscriptionForm.valid) {
      this.isLoading = true;
      
      try {
        const formData = this.inscriptionForm.value;
        
        // Supprimer confirmPassword avant d'envoyer les données
        delete formData.confirmPassword;
        
        // const result = await this.authService.inscription(formData);
        const result = {success:false, error:"Erreur"};
        
        if (result.success) {
          this.snackBar.open(
            'Inscription réussie ! Vérifiez votre email pour confirmer votre compte.',
            'Fermer',
            { duration: 5000, panelClass: ['success-snackbar'] }
          );
          
          // Rediriger vers la page de connexion après un délai
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        } else {
          this.snackBar.open(
            result.error || 'Erreur lors de l\'inscription',
            'Fermer',
            { duration: 5000, panelClass: ['error-snackbar'] }
          );
        }
      } catch (error: any) {
        console.error('Erreur inscription:', error);
        this.snackBar.open(
          'Erreur lors de l\'inscription. Veuillez réessayer.',
          'Fermer',
          { duration: 5000, panelClass: ['error-snackbar'] }
        );
      } finally {
        this.isLoading = false;
      }
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.inscriptionForm.controls).forEach(key => {
      const control = this.inscriptionForm.get(key);
      control?.markAsTouched();
    });
  }

  // Méthode pour obtenir le message d'erreur approprié
  getErrorMessage(fieldName: string): string {
    const field = this.inscriptionForm.get(fieldName);
    
    if (field?.hasError('required')) {
      return 'Ce champ est requis';
    }
    
    if (field?.hasError('email')) {
      return 'Veuillez entrer une adresse email valide';
    }
    
    if (field?.hasError('minlength')) {
      const requiredLength = field.errors?.['minlength']?.requiredLength;
      return `Minimum ${requiredLength} caractères requis`;
    }
    
    if (field?.hasError('pattern')) {
      if (fieldName === 'telephone') {
        return 'Veuillez entrer un numéro de téléphone valide (10 chiffres)';
      }
      if (fieldName === 'codePostal') {
        return 'Veuillez entrer un code postal valide (5 chiffres)';
      }
    }
    
    if (field?.hasError('passwordMismatch')) {
      return 'Les mots de passe ne correspondent pas';
    }
    
    return '';
  }
}