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

  teachers : Teacher[] = [];

  teachersFiltered : Teacher[];

  newTeacher : Teacher;

  showError : boolean = false;

  filter : string;

  constructor(private teacherService : TeacherService) {
    this.getAll();
    this.newTeacher = new Teacher();
  }

  ngOnInit(): void {
  }

  getAll() {
    this.teacherService.getAll().subscribe(
      result => {
        this.teachers = result;
        this.teachersFiltered = result
      }
    );
  }

  save() {
    if (this.isValidTeacher()) {
      if (this.newTeacher.id) {
        this.teacherService.update(this.newTeacher).subscribe(
          res => this.getAll()
        );
      } else {
        this.teacherService.save(this.newTeacher).subscribe(
          res => this.getAll()
        );
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
    this.teacherService.delete(teacher).subscribe(
      res => this.getAll()
    );
  }

  search() {
    if (this.filter && this.filter.trim() !== '') {
      let f = this.filter.toLowerCase();

      this.teachers = this.teachersFiltered.filter(item => 
          item.name.toLowerCase().startsWith(f) || item.email.toLowerCase().startsWith(f)
      );
    } else {
      this.teachers = this.teachersFiltered;
    }
  }

}
