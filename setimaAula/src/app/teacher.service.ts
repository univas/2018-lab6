import { Injectable } from '@angular/core';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private teachers : Teacher[] = [];

  constructor() { }

  getAll() {
    return this.teachers;
  }

  save(teacher : Teacher) {
    this.teachers.push(teacher);
  }

  update(teacher : Teacher) {
    let oldTeacher = this.teachers.find(tea => tea.id === teacher.id);
    oldTeacher.name = teacher.name;
    oldTeacher.email = teacher.email;
    oldTeacher.subject = teacher.subject;
  }

  delete(teacher : Teacher) {
    let index = this.teachers.indexOf(teacher);
    this.teachers.splice(index, 1);
  }

}
