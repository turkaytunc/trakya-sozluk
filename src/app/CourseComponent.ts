import {Component} from '@angular/core';
import {CoursesService} from './course/courses.service';

@Component({
  selector: 'courses',
  template: `
    <button class="btn btn-primary" [class.active]="isActive" (click)="onSave()">Save</button>
  `
})
export class CourseComponent {
  isActive = true;
  title = 'List of courses';
  courses;

  onSave() {
    console.log('button was clicked');
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

}
