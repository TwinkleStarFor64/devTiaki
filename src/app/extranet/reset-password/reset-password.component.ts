import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthService } from '../../partage/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  isLoading = false;
  isResetMode = false; // true si on a un token de reset dans l'URL

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initForm();

    // Vérifier si on a un token de reset dans l'URL
    this.route.fragment.subscribe(fragment => {
      if (fragment && fragment.includes('access_token')) {
        this.isResetMode = true;
        this.resetForm.addControl('newPassword', this.formBuilder.control('', [Validators.required, Validators.minLength(8)]));
        this.resetForm.addControl('confirmPassword', this.formBuilder.control('', [Validators.required]));
        this.resetForm.setValidators(this.passwordMatchValidator);
      }
    });
  }

  private initForm(): void {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Validateur pour vérifier que les mots de passe correspondent
  private passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const form = control as FormGroup;
    const newPassword = form.get('newPassword');
    const confirmPassword = form.get('confirmPassword');

    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }

    return null;
  }

  async onSubmit(): Promise<void> {
    if (this.resetForm.valid) {
      this.isLoading = true;

      try {
        if (this.isResetMode) {
          // Mode changement de mot de passe
          await this.updatePassword();
        } else {
          // Mode demande de reset
          await this.requestReset();
        }
      } catch (error: any) {
        console.error('Erreur:', error);
        this.snackBar.open(
          'Une erreur est survenue. Veuillez réessayer.',
          'Fermer',
          { duration: 5000, panelClass: ['error-snackbar'] }
        );
      } finally {
        this.isLoading = false;
      }
    }
  }

  private async requestReset(): Promise<void> {
    // const result = await this.authService.resetPassword(this.resetForm.get('email')?.value);
    const result = { success: false, error: "Erreur" };

    if (result.success) {
      this.snackBar.open(
        'Un email de réinitialisation a été envoyé à votre adresse.',
        'Fermer',
        { duration: 5000, panelClass: ['success-snackbar'] }
      );

      setTimeout(() => {
        this.router.navigate(['/']);
      }, 2000);
    } else {
      this.snackBar.open(
        result.error || 'Erreur lors de l\'envoi de l\'email',
        'Fermer',
        { duration: 5000, panelClass: ['error-snackbar'] }
      );
    }
  }

  private async updatePassword(): Promise<void> {
    // TODO: Implémenter la mise à jour du mot de passe avec Supabase
    // Cette fonctionnalité nécessite l'utilisation de supabase.auth.updateUser()
    this.snackBar.open(
      'Fonctionnalité en cours de développement',
      'Fermer',
      { duration: 3000 }
    );
  }

  getErrorMessage(fieldName: string): string {
    const field = this.resetForm.get(fieldName);

    if (field?.hasError('required')) {
      return 'Ce champ est requis';
    }

    if (field?.hasError('email')) {
      return 'Veuillez entrer une adresse email valide';
    }

    if (field?.hasError('minlength')) {
      return 'Le mot de passe doit contenir au moins 8 caractères';
    }

    if (field?.hasError('passwordMismatch')) {
      return 'Les mots de passe ne correspondent pas';
    }

    return '';
  }
}