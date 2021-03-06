import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseComponent} from './CourseComponent';
import {CoursesService} from './course/courses.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SummaryPipe} from './summary.pipe';
import {FavoriteComponent} from './favorite/favorite.component';
import {InputFormatDirective} from './input-format.directive';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FeedbackComponent, Topic} from './feedback/feedback.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {TopicsComponent} from './topics/topics.component';
import {TopicService} from './topic.service';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {NewCourseFormComponent} from './new-course-form/new-course-form.component';
import {PersonComponent} from './person/person.component';
import {PersonService} from './person.service';
import {TodoComponent} from './todo/todo.component';
import {TodoService} from './todo.service';
import { NewtodoComponent } from './newtodo/newtodo.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NewtopicComponent } from './newtopic/newtopic.component';





@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    InputFormatDirective,
    ContactFormComponent,
    NavigationComponent,
    FeedbackComponent,
    NotFoundComponent,
    TopicsComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PersonComponent,
    TodoComponent,
    NewtodoComponent,
    NewtopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    CoursesService,
    FavoriteComponent,
    TopicService,
    PersonService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
