import { Component, OnInit } from '@angular/core';
import { movies } from 'app/interfaces/moviesinterface';
import { Store } from '@ngrx/store';
import { addLike } from 'app/store/likes/likes.actions';

@Component({
  selector: 'app-likes-sidebar',
  templateUrl: './likes-sidebar.component.html',
  styleUrls: ['./likes-sidebar.component.scss'],
})
export class LikesSidebarComponent implements OnInit {
  likesList: movies[] = [];

  constructor(private _store: Store<{ like: movies[] }>) {}

  addToLikes(like: movies) {
    this._store.dispatch(addLike({ Like: like }));
  }
  ngOnInit(): void {
    this._store.select('like').subscribe((res) => {
      this.likesList = res;
    });
  }
}
