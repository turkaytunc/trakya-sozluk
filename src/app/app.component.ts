import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  task = {
    title: 'Rewiew',
    assignee: {
      name: 'Enes Usta',
      age: 21
    }
  };

}
