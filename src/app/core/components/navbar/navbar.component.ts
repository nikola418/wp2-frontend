import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectCartCount } from '../../selectors/cart';
import { IUser } from '../../models/user';
import { UserRole } from '../../enums/user-role';
import { selectUser } from '../../selectors/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  cartCount$: Observable<number>;
  user$: Observable<IUser | null>;
  isAdmin$: Observable<boolean>;
  isBurgerOpen = false;
  containerStyles = '';

  constructor(private store: Store) {
    this.cartCount$ = this.store.select(selectCartCount);
    this.user$ = this.store.select<IUser | null>(selectUser);
    this.isAdmin$ = this.user$.pipe(
      map((val) => val !== null && val.role.value === UserRole.Admin),
    );
  }

  handleBurgerClick() {
    this.isBurgerOpen = !this.isBurgerOpen;
  }
}
