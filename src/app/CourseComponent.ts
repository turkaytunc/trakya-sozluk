import {Component} from '@angular/core';
import {CoursesService} from './course/courses.service';

@Component({
  selector: 'courses',
  template: `
    {{text | summary}}
  `
})
export class CourseComponent {

  text = 'adasuihfasuydgasfguyasasufgasfuygasuydgsauyfgasuydgsauyfgasuyfgasuydgasuyfgasdytasfasuydgasuyfgasuyfgasdtyasfgasuygasf';

}
