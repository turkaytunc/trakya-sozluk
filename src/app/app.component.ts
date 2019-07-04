import {Component, ViewEncapsulation} from '@angular/core';
import {FavoriteChangeEventArgs} from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  viewMode = 'ngSwitchDefault';

}
