import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.component.scss'],
})
export class SignupPageComponent {
  email = '';
  password = '';
  name = '';
  surname = '';
  phoneNumber = '';
  address = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  error: string | null = null;

  handleSignUp() {
    this.authService
      .signUp(
        this.email,
        this.password,
        this.name,
        this.surname,
        this.phoneNumber,
        this.address,
      )
      .subscribe(
        (res) => {
          this.router.navigate(['auth/signin']);
        },
        (err) => {
          this.error = err;
        },
        () => {
          return;
        },
      );
  }
}
