import { createAction, props } from '@ngrx/store';
import { movies } from 'app/interfaces/moviesinterface';

export const addLike = createAction('Add a like', props<{ Like: movies }>());
export const removeLike = createAction(
  'Remove a like',
  props<{ Id: number }>()
);
