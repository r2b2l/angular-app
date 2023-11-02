import { Component } from '@angular/core';
import { User } from '../models/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../validators/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = new User('', '', '');
  hidePassword: boolean = true;

  loginForm: FormGroup;
  mailFC: FormControl = new FormControl(this.user.mail, [
    Validators.required,
     Validators.email
  ]);
  passwordFC: FormControl = new FormControl(this.user.password, [
    Validators.required,
    passwordValidator()
  ])

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      mail: this.mailFC,
      password: this.passwordFC
    })
  }

  onSubmit() {
    console.log(this.user);
  }

  getMailErrorMessage(): string {
    if (this.mailFC.hasError('required')) {
      return 'Saisir un email';
    }

    return this.mailFC.hasError('email') ? 'Mail non valide' : '';
  }

  getPasswordErrorMessage(): string {
    if (this.passwordFC.hasError('required')) {
      return 'Saisir un mot de passe';
    }

    return this.passwordFC.hasError('invalidPassword') ? '1 majuscule, 1 minuscule, 1 caractère spécial, 6 caractères minimum' : '';
  }

}
