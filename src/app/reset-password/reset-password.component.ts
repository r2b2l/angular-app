import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../validators/password.validator';
import { AuthService } from '../services/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  @Input() mail: string = '';
  user: User = new User('', '', '');
  isPasswordHidden: boolean = true;
  isFormHidden: boolean = true;
  isSlideToggleActivated: boolean = false;
  isFormSubmitted: boolean = false;
  loginForm: FormGroup;

  passwordFC: FormControl = new FormControl(this.user.password, [
    Validators.required,
    passwordValidator()
  ]);

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private _snackBar: MatSnackBar) {
    this.loginForm = this.formBuilder.group({
      password: this.passwordFC
    });
  }

  onSubmit() {
    if (!this.isFormSubmitted) {
      this.isFormSubmitted = true;
      this.user.mail = this.mail;
      this.authService.resetPassword(this.user, this.isSlideToggleActivated)
      .pipe(take(1)) // Subscribe to only one request
        .subscribe({
          next: data => {
            this._snackBar.open('Mot de passe modifié avec succès.', 'Fermer', {
              duration: 3000
            });
            this.isFormSubmitted = false;
            this.isFormHidden = true;
          },
          error: error => {
            this.isFormSubmitted = false;
          }
        });
    }
  }

  encryptPassword() {
    const passwordFC = this.loginForm.get('password')!;
    const originalValue = passwordFC.value;
    const encryptPassword = originalValue; // encrypt function here
    passwordFC.setValue(encryptPassword); // S'assurer que c'est la valeur "formulaire" qui est modifiée, pas l'input de l'utilisateur
  }

  /**
 * Check validity of the password form control and return custom error under the input field
 * @returns string error message for password field
 */
  getPasswordErrorMessage(): string {
    if (this.passwordFC.hasError('required')) {
      return 'Saisir un mot de passe';
    }

    return this.passwordFC.hasError('invalidPassword') ? '1 majuscule, 1 minuscule, 1 caractère spécial, 6 caractères minimum' : '';
  }
}
