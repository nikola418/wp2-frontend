import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models/user';
import { selectUser } from 'src/app/core/selectors/user';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfilePageComponent {
  user$: Observable<IUser | null>;
  products = [
    {
      id: '',
      img: '',
      desc: '',
      title: '',
      sizes: [{ dimension: { name: 'Medium', value: 2 }, price: 590.0 }],
    },
  ];
  orders = [
    {
      id: '1',
      customer: '1',
      total: 200,
      paymentMethod: { name: 'CashOnDelivery', value: 1 },
      status: { name: 'Ready', value: 3 },
    },
  ];

  constructor(
    private store: Store<IUser>,
    private authService: AuthService,
  ) {
    this.user$ = this.store.select(selectUser);
    this.user$.subscribe((res) => {
      if (res === null) this.authService.getMe();
    });
  }
}
