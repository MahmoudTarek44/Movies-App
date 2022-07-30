import { Component, OnInit, Input } from '@angular/core';
import { movies } from 'app/interfaces/moviesinterface';
import { Store } from '@ngrx/store';
import { addLike, removeLike } from 'app/store/likes/likes.actions';
import { removeWish } from 'app/store/fav/fav.actions';

@Component({
  selector: 'app-fav-card',
  templateUrl: './fav-card.component.html',
  styleUrls: ['./fav-card.component.scss'],
})
export class FavCardComponent implements OnInit {
  liked: boolean = false;
  @Input() input: movies = {} as movies;

  constructor(private _store: Store<{ fav: movies[]; like: movies[] }>) {}

  removeFav(Id: number) {
    this._store.dispatch(removeWish({ Id }));
  }
  like(like: movies, id: number) {
    if (this.liked == false) {
      this._store.dispatch(addLike({ Like: like }));
      this.liked = true;
    } else {
      this._store.dispatch(removeLike({ Id: id }));
      this.liked = false;
    }
  }
  ngOnInit(): void {
    this._store.select('like').subscribe((res) => {
      const likedItem = res.find((media: any) => {
        return this.input.id == media.id;
      });
      if (likedItem) {
        this.liked = true;
      }
    });
  }
}
