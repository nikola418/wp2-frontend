import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../auth.component.scss'],
})
export class SignInPageComponent {
  email = '';
  password = '';
  error: HttpErrorResponse | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  handleSignIn() {
    this.authService.signIn(this.email, this.password).subscribe();

    this.router.navigate(['/home']);
  }
}
