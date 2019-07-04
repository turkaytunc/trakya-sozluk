import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isSelected: boolean;
  private color = 'black';
  @Output() change = new EventEmitter();


  private list: any = [
    'red', 'green', 'blue'
  ];

  constructor() {
  }


  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({newValue: this.isSelected});
  }
}

export interface FavoriteChangeEventArgs {
  newValue: boolean;
}
