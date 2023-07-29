import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
  ) {}

  signIn(email: string, password: string) {
    return this.httpClient.post(
      `${this.apiUrl}/sign-in`,
      {
        email,
        password,
      },
      { withCredentials: true },
    );
  }

  signUp(
    email: string,
    password: string,
    name: string,
    surname: string,
    phoneNumber: string,
    address: string,
  ) {
    return this.httpClient.post(`${this.apiUrl}/sign-up`, {
      email,
      password,
      name,
      surname,
      phoneNumber,
      address,
    });
  }

  canActivate(role: number) {
    if (role === 0) {
      return true;
    }
    return false;
  }
}
