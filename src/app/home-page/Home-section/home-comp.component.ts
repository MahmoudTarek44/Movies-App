import { LoaderService } from './../../services/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.scss'],
})
export class HomeCompComponent implements OnInit {
  constructor(public _loader: LoaderService) {}

  ngOnInit(): void {}
}
