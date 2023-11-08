import { Component } from '@angular/core';
import { User } from '../models/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = new User('', '', '');
  hidePassword: boolean = true;
  redirectRoute: string = '';

  loginForm: FormGroup;
  mailFC: FormControl = new FormControl(this.user.mail, [
    Validators.required,
    Validators.email
  ]);
  passwordFC: FormControl = new FormControl(this.user.password, [
    Validators.required,
    // passwordValidator()
  ])

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: ActivatedRoute) {
    this.loginForm = this.formBuilder.group({
      mail: this.mailFC,
      password: this.passwordFC
    });
    this.route.queryParams.subscribe(params => {
      this.redirectRoute = params['redirectAfterLogin'];
      console.log('After login, redirect to: ', this.redirectRoute);
    });
  }

  /**
   * Submit the form and redirect to caller
   */
  onSubmit() {
    this.authService.login(this.user, this.redirectRoute);
  }

  encryptPassword() {
    const passwordFC = this.loginForm.get('password')!;
    const originalValue = passwordFC.value;
    const encryptPassword = originalValue; // encrypt function here
    passwordFC.setValue(encryptPassword); // S'assurer que c'est la valeur "formulaire" qui est modifiée, pas l'input de l'utilisateur
  }

  /**
   * Check validity of the mail form control and return custom error under the input field
   * @returns string error message for mail field
   */
  getMailErrorMessage(): string {
    if (this.mailFC.hasError('required')) {
      return 'Saisir un mail';
    }

    return this.mailFC.hasError('email') ? 'Mail non valide' : '';
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
