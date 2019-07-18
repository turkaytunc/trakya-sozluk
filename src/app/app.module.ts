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


const appRoutes: Routes = [
  {
    path: 'topics',
    component: TopicsComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: 'login',
    component: SignupFormComponent
  },
  {
    path: '',
    component: TopicsComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];


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
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    ReactiveFormsModule
  ],
  providers: [
    CoursesService,
    FavoriteComponent,
    TopicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
