import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePageComponent {
  constructor(
    private authService: AuthService,
    private store: Store<IUser>,
  ) {}
}
