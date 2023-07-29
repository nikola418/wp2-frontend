import { createAction, props } from '@ngrx/store';
import { IPizza } from '../models/pizza';

export const clearCart = createAction('Clear Cart');
export const addToCart = createAction('Add to Cart', props<IPizza>());
export const removeFromCart = createAction('Remove from Cart', props<IPizza>());
