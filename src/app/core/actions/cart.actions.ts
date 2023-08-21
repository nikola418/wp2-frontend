import { createAction, props } from '@ngrx/store';
import { ICartProduct } from '../models/cart';

export const clearCart = createAction('Clear Cart');
export const addToCart = createAction('Add to Cart', props<ICartProduct>());
export const removeFromCart = createAction(
  'Remove from Cart',
  props<ICartProduct>(),
);
