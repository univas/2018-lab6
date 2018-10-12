import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teacher';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers : Teacher[];

  subjects : Subject[];

  newTeacher : Teacher;

  showError : boolean = false;

  constructor(private teacherService : TeacherService,
              private subjectService : SubjectService) {
    this.subjects = subjectService.getAll();
    this.teachers = teacherService.getAll();
    this.newTeacher = new Teacher();
  }

  ngOnInit(): void {
  }

  save() {
    if (this.isValidTeacher()) {
      if (this.newTeacher.id) {
        this.teacherService.update(this.newTeacher);
      } else {
        this.newTeacher.id = (new Date()).getTime();
        this.teacherService.save(this.newTeacher);
      }
      
      this.newTeacher = new Teacher();
      this.showError = false;
    } else {
      this.showError = true;
    }
  }

  isValidTeacher() {
    if (!this.newTeacher.name || this.newTeacher.name.trim() === '' ||
        !this.newTeacher.email || this.newTeacher.email.trim() === '') {
      return false;
    }
    return true;
  }

  edit(teacher : Teacher) {
    this.newTeacher = new Teacher(teacher.id, teacher.name, teacher.email);
  }

  delete(teacher : Teacher) {
    this.teacherService.delete(teacher);
  }

}
