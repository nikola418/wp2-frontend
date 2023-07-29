import { Component } from '@angular/core';
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

  constructor(private authService: AuthService) {}
  error = null;

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
      .subscribe((res) => console.log(res));
  }
}
