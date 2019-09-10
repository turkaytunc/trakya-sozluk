import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TopicsComponent} from './topics/topics.component';
import {TodoComponent} from './todo/todo.component';
import {PersonComponent} from './person/person.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {NewCourseFormComponent} from './new-course-form/new-course-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NewtodoComponent} from './newtodo/newtodo.component';
import {NewtopicComponent} from './newtopic/newtopic.component';


const routes: Routes = [
  {
    path: 'topics',
    component: TopicsComponent
  },
  {
    path: 'topics/new',
    component: NewtopicComponent
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'todo/new',
    component: NewtodoComponent
  },
  {
    path: 'person',
    component: PersonComponent
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
    path: 'a',
    component: NewCourseFormComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
