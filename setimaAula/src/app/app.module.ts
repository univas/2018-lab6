import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SubjectComponent } from './subject/subject.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseComponent } from './course/course.component';

const appRoutes : Routes = [
  {path : 'teacher', component : TeacherComponent},
  {path : 'subject', component : SubjectComponent},
  {path : 'course', component : CourseComponent},
  {path : '', redirectTo: 'course', pathMatch : 'full'},
  {path : '**', component : NotFoundComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    SubjectComponent,
    NotFoundComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
