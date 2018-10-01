import { Component } from '@angular/core';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newTeacher : Teacher;

  teachers : Teacher[];

  constructor(private teacherService : TeacherService) {
    this.teachers = this.teacherService.getAll();
    this.newTeacher = new Teacher();
  }

  save() {
    if (this.newTeacher.id) {
      this.teacherService.edit(this.newTeacher);
    } else {
      this.newTeacher.id = (new Date()).getTime();
      this.teacherService.save(this.newTeacher);
    }

    this.newTeacher = new Teacher();
  }

  edit(teacher : Teacher) {
    this.newTeacher = new Teacher(teacher.id, teacher.course, teacher.subject,
                                  teacher.name, teacher.year, teacher.semester);
  }

  delete(teacher : Teacher) {
    this.teacherService.delete(teacher);
  }
}
