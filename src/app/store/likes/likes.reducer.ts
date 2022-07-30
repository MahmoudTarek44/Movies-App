import { addLike, removeLike } from './../likes/likes.actions';
import { movies } from 'app/interfaces/moviesinterface';
import { createReducer, on } from '@ngrx/store';

export const initialState: Array<movies> = [];

export const likeReducer = createReducer(
  initialState,
  on(addLike, (state, { Like }) => {
    state = state.filter((movie) => {
      return movie.id !== Like.id;
    });
    state = [...state, Like];
    return state;
  }),
  on(removeLike, (state, { Id }) => {
    state = [...state];
    state = state.filter((movie) => {
      return movie.id !== Id;
    });
    return state;
  })
);
