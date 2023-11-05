import { Component } from '@angular/core'; 
import { AuthService } from './services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Toolbox';

  constructor(private authService: AuthService, private router: Router) {}

  isAuthenticated(): boolean {
    return this.authService.isUserAuthenticated;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
