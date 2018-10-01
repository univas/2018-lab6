import { Injectable } from '@angular/core';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private data : Teacher[] = [];

  constructor() { }

  getAll() {
    return this.data;
  }

  save(teacher : Teacher) {
    this.data.push(teacher);
  }

  edit(teacherToEdit : Teacher) {
    let teacher = this.data.find(t => t.id === teacherToEdit.id);
    teacher.course = teacherToEdit.course;
    teacher.subject = teacherToEdit.subject;
    teacher.name = teacherToEdit.name;
    teacher.year = teacherToEdit.year;
    teacher.semester = teacherToEdit.semester;
  }

  delete(teacherToDelete : Teacher) {
    let index = this.data.indexOf(teacherToDelete);
    this.data.splice(index, 1);
  }
}
