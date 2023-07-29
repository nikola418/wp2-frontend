import { createReducer, on } from '@ngrx/store';
import { dropUser, setUser } from '../actions/user.actions';
import { IUser } from '../models/user';

const initialUserState: { user: IUser | null } = { user: null };

export const userReducer = createReducer(
  initialUserState,
  on(setUser, (_, props) => {
    return { user: props };
  }),
  on(dropUser, (_) => {
    return { user: null };
  }),
);
