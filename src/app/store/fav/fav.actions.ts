import { createAction, props } from '@ngrx/store';
import { movies } from 'app/interfaces/moviesinterface';

export const addWish = createAction('Add a Wish', props<{ Wish: movies }>());
export const removeWish = createAction(
  'Remove a Wish',
  props<{ Id: number }>()
);
export const deleteWishes = createAction('Delete all wishes');
