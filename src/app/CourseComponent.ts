import {Component} from '@angular/core';
import {CoursesService} from './course/courses.service';

@Component({
  selector: 'courses',
  template: `
    <button class="btn btn-primary">Save</button>
  `
})
export class CourseComponent {
  title = 'List of courses';
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

}
