import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

interface ApiLoginResponse {
  isSuccess: boolean;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private apiUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient, private router: Router) {
    this.authToken;
  }

  login(user: User, redirectRoute: string): void {
    this.http.post<ApiLoginResponse>(this.apiUrl + '/login', {
      mail: user.mail,
      password: user.password
    }).subscribe(data => {
      this.authToken = data.token; // Call function set authToken
      if (redirectRoute !== '') {
        this.router.navigateByUrl(redirectRoute);
      }
      this.router.navigateByUrl('/sorare/my-club');
    });
  }

  /**
   * Reset the password
   * In prod, should be by a OTP
   * @param user 
   * @param envDev 
   * @returns 
   */
  resetPassword(user: User, envDev: boolean): Observable<any> {
    return of({ isSuccess: true });
    return this.http.post<ApiLoginResponse>(this.apiUrl + '/resetPassword', {
      mail: user.mail,
      password: user.password,
      force: envDev
    });
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
    if (token) {
      localStorage.setItem(this.TOKEN_KEY, token)
    } else {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }
}
