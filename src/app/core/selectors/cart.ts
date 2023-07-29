import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICart } from '../models/cart';

export const selectCartCount = createSelector(
  createFeatureSelector('cart'),
  (state: ICart) => {
    return state.quantity;
  },
);

export const selectCartTotal = createSelector(
  createFeatureSelector('cart'),
  (state: ICart) => {
    return state.total;
  },
);
