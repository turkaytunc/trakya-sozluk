import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseComponent} from './CourseComponent';
import {CoursesService} from './course/courses.service';
import { ListComponent } from './list/list.component';
import {FormsModule} from '@angular/forms';
import {SummaryPipe} from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ListComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    CoursesService,
    FavoriteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
