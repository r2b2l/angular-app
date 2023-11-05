import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';

  constructor() { 
    this.authToken;
  }

  login(): void {
    this.authToken = 'sfsge'; // Call function set authToken
  }

  logout(): void {
    this.authToken = null;
  }

  get isUserAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get authToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  set authToken(token: string | null) {
    if(token) {
      localStorage.setItem(this.TOKEN_KEY, token)
    } else {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }
}
