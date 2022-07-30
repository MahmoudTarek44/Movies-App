import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private _router: Router) {}

  SearchForMedia(data: any) {
    if (data.controls.search.value) {
      let input = data.controls.search.value;
      this._router.navigate([`/home/search/${input}`]);
    } else {
      alert('Please enter your desired search in the search bar below!');
    }
  }
  ngOnInit(): void {}
}
