import { createAction, props } from '@ngrx/store';
import { IUser } from '../models/user';

export const setUser = createAction('Set User', props<IUser>());
export const dropUser = createAction('Drop User');
