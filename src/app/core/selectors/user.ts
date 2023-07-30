import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUser } from '../models/user';

export const selectUser = createSelector(
  createFeatureSelector<{ user: IUser | null }>('user'),
  (state) => state.user,
);
