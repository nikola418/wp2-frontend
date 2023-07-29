import { ICart } from '../models/cart';
import { addToCart, clearCart, removeFromCart } from '../actions/cart.actions';
import { createReducer, on } from '@ngrx/store';

const initialCartState: ICart = {
  products: [],
  quantity: 0,
  total: 0,
};

export const cartReducer = createReducer(
  initialCartState,
  on(clearCart, () => initialCartState),
  on(addToCart, (entries, product) => {
    const entriesClone: ICart = JSON.parse(JSON.stringify(entries));
    entriesClone.products.push(product);
    return entriesClone;
  }),
  on(removeFromCart, (entries, product) => {
    const entriesClone: ICart = JSON.parse(JSON.stringify(entries));
    const find = entriesClone.products.find((e) => product.id == e.id);
    if (find) {
      entriesClone.products.splice(entriesClone.products.indexOf(find), 1);
    }

    return entriesClone;
  }),
);
