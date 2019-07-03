import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseComponent} from './CourseComponent';
import {CoursesService} from './course/courses.service';
import { ListComponent } from './list/list.component';
import {FormsModule} from '@angular/forms';
import {SummaryPipe} from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ListComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
