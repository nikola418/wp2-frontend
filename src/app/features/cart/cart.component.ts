import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCart } from 'src/app/core/selectors/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartPageComponent {
  cart;

  isOpen = false;
  isCash = false;

  constructor(private store: Store) {
    this.cart = this.store.select(selectCart);
  }

  handleCheckout() {
    this.isOpen = !this.isOpen;
  }

  handleCash() {
    this.isCash = !this.isCash;
  }
}
