import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartCount } from '../../selectors/cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  burgerOpen = false;
  containerStyles = '';

  cartCount$: Observable<number>;

  constructor(private store: Store) {
    this.cartCount$ = store.select(selectCartCount);
  }

  handleBurgerClick() {
    this.burgerOpen = !this.burgerOpen;
  }
}
