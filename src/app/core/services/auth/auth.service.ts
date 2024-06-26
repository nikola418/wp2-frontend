import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { IUser } from '../../models/user';
import { Store } from '@ngrx/store';
import { selectUser } from '../../selectors/user';
import { dropUser, setUser } from '../../actions/user.actions';

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
    return this.httpClient
      .post<IUser>(`${this.apiUrl}/sign-in`, {
        email,
        password,
      })
      .pipe((res) => {
        res.subscribe(() => this.getMe());
        return res;
      });
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
    return this.httpClient
      .get(`${this.apiUrl}/sign-out`)
      .subscribe(() => this.store.dispatch(dropUser()));
  }

  getMe() {
    return this.httpClient.get<IUser>(`${this.apiUrl}/me`).pipe((res) => {
      res.subscribe((user) => this.store.dispatch(setUser(user)));
      return res;
    });
  }

  isAdmin() {
    return this.store.select(selectUser);
  }
}
