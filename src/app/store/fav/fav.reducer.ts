import { movies } from 'app/interfaces/moviesinterface';
import { createReducer, on } from '@ngrx/store';
import { addWish, removeWish, deleteWishes } from './fav.actions';

export const initialState: Array<movies> = [];

export const favReducer = createReducer(
  initialState,
  on(addWish, (state, { Wish }) => {
    state = state.filter((movie) => {
      return movie.id !== Wish.id;
    });
    state = [...state, Wish];
    return state;
  }),
  on(removeWish, (state, { Id }) => {
    state = [...state];
    state = state.filter((movie) => {
      return movie.id !== Id;
    });
    return state;
  }),
  on(deleteWishes, (state) => {
    state = [];
    console.log(state);
    return state;
  })
);
