import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICart } from '../models/cart';

export const selectCartCount = createSelector(
  createFeatureSelector<ICart>('cart'),
  (state) => state.quantity,
);

export const selectCartTotal = createSelector(
  createFeatureSelector<ICart>('cart'),
  (state) => state.total,
);
