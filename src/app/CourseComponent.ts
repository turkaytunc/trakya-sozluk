import {Component} from '@angular/core';
import {CoursesService} from './course/courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{getTitle()}}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
    <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
    <div (click)="onDivClicked()">
      <button (click)="onSave($event)">Save</button>
    </div>
    <input (keyup)="onKeyUp($event)">
    <input (keyup.enter)="onKeyUp2($event)"/>
    <input [value]="email" (keyup.enter)="onKeyUp3()"/>
    <input [value]="email" (keyup.enter)=" email = $event.target.value; onKeyUp4()"/>
  `
})
export class CourseComponent {
  isActive = true;
  title = 'List of courses';
  courses;
  email = 'enesusta@email.com';

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }


  onSave($event) {
    $event.stopPropagation();
    console.log('button was clicked' + $event);
  }


  getTitle() {
    return this.title;
  }

  onDivClicked() {
    console.log('div was clicked');
  }

  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log('Enter was pressed');
    }

  }

  onKeyUp2($event) {
    console.log($event.target.value);
  }


  onKeyUp3() {
    console.log(this.email);
  }

  onKeyUp4() {
    return '';
  }
}
