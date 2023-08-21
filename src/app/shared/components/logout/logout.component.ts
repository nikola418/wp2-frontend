import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  handleSignOut() {
    this.authService.signOut().add(() => this.router.navigate(['/']));
  }
}
