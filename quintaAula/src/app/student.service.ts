import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  data : Student[] = [];

  constructor() { }

  getAll() {
    return this.data;
  }

  save(student : Student) {
    this.data.push(student);
  }

  edit(student : Student) {
    let oldStudent = this.data.find(stu => stu.id == student.id);
    oldStudent.name = student.name;
    oldStudent.cpf = student.cpf;
    oldStudent.email = student.email;
    oldStudent.telephone = student.telephone;
  }

  delete(student : Student) {
    let index = this.data.indexOf(student);
    this.data.splice(index, 1);
  }

}
