import { Component } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newStudent : Student = new Student();

  students : Student[];

  constructor(private studentService : StudentService) {
    this.students = studentService.getAll();
  }

  save() {
    if (this.newStudent.id) {
      this.studentService.edit(this.newStudent);
    } else {
      this.newStudent.id = (new Date()).getTime();
      this.studentService.save(this.newStudent);
    }

    this.newStudent = new Student();
  }

  edit(student : Student) {
    this.newStudent = new Student(student.id, student.name, student.email, student.cpf, student.telephone);
  }

  delete(student : Student) {
    this.studentService.delete(student);
  }


}
