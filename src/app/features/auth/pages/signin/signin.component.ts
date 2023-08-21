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
  error: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  handleSignIn() {
    this.authService.signIn(this.email, this.password).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/home']);
      },
      (err) => {
        this.error = err;
      },
    );
  }
}
