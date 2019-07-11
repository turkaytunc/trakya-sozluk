import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseComponent} from './CourseComponent';
import {CoursesService} from './course/courses.service';
import {FormsModule} from '@angular/forms';
import {SummaryPipe} from './summary.pipe';
import {FavoriteComponent} from './favorite/favorite.component';
import {InputFormatDirective} from './input-format.directive';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {NotesComponent} from './notes/notes.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
  {
    path: 'notes',
    component: NotesComponent
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
    path: '',
    component: NotesComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    InputFormatDirective,
    ContactFormComponent,
    NotesComponent,
    NavigationComponent,
    FeedbackComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [
    CoursesService,
    FavoriteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
