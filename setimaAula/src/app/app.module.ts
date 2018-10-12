import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SubjectComponent } from './subject/subject.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes : Routes = [
  {path : 'teacher', component : TeacherComponent},
  {path : 'subject', component : SubjectComponent},
  {path : '', redirectTo: 'teacher', pathMatch : 'full'},
  {path : '**', component : NotFoundComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    SubjectComponent,
    NotFoundComponent
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
