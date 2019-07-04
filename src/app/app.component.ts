import {Component, ViewEncapsulation} from '@angular/core';
import {FavoriteChangeEventArgs} from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  courses = [1, 2, 3];

  doWeHaveAnyCourses() {
    return this.courses.length !== 0 ? true : false;
  }
}
