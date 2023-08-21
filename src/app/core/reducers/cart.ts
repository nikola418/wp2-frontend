import { ICart } from '../models/cart';
import { addToCart, clearCart, removeFromCart } from '../actions/cart.actions';
import { createReducer, on } from '@ngrx/store';
import { PizzaDimension } from '../enums/pizza-dimension';

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
    entriesClone.products.push({
      ...product,
      total:
        product.pizza.sizes[
          Object.values(PizzaDimension).indexOf(product.dimension.name)
        ].price * product.count,
    });
    entriesClone.quantity++;
    entriesClone.total +=
      product.pizza.sizes[
        Object.values(PizzaDimension).indexOf(product.dimension.name)
      ].price;
    return entriesClone;
  }),
  on(removeFromCart, (entries, product) => {
    const entriesClone: ICart = JSON.parse(JSON.stringify(entries));
    const find = entriesClone.products.find(
      (e) => product.pizza.id == e.pizza.id,
    );
    if (find) {
      entriesClone.products.splice(entriesClone.products.indexOf(find), 1);
    }
    entriesClone.total -=
      product.pizza.sizes[
        Object.values(PizzaDimension).indexOf(product.dimension.name)
      ].price;
    entriesClone.quantity--;

    return entriesClone;
  }),
);
