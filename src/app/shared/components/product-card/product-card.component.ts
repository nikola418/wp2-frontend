import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/core/actions/cart.actions';
import { IPizza } from 'src/app/core/models/pizza';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input()
  product!: IPizza;

  constructor(private store: Store) {}

  addToCart() {
    this.store.dispatch(addToCart(this.product));
  }
}
