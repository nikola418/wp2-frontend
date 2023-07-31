import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { IUser } from '../../models/user';
import { Store } from '@ngrx/store';
import { selectUser } from '../../selectors/user';
import { setUser } from '../../actions/user.actions';
import { UserRole } from '../../enums/user-role';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private store: Store<IUser>,
  ) {}

  signIn(email: string, password: string) {
    firstValueFrom(
      this.httpClient.post(`${this.apiUrl}/sign-in`, {
        email,
        password,
      }),
    );

    return this.me();
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

  signOut() {
    return this.httpClient.get(`${this.apiUrl}/sign-out`, {});
  }

  async me() {
    const savedUser = await firstValueFrom(this.store.select(selectUser));
    if (savedUser) {
      return savedUser;
    }

    const user = await firstValueFrom(
      this.httpClient.get<IUser>(`${this.apiUrl}/me`),
    );

    this.store.dispatch(setUser(user));
    return user;
  }

  async isAdmin() {
    const savedUser = await firstValueFrom(this.store.select(selectUser));
    return savedUser !== null && savedUser.role.value === UserRole.Admin;
  }
}
