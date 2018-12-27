import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { CourseService } from '../course.service';
import { Course } from '../course';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  courses : Course[];

  subjects : Subject[] = [];

  subjectsFiltered : Subject[];

  newSubject : Subject;

  filter : string;

  constructor(private subjectService : SubjectService, private courseService : CourseService) {
    this.courseService.getAll().subscribe(
      result => {
        this.courses = result;
        this.getAll();
      }
    );
    this.newSubject = new Subject();
  }

  ngOnInit(): void {
  }

  getAll() {
    this.subjectService.getAll().subscribe(
      result => {
        result.forEach(element => {
          element.course = this.courses.find(e => e.id == element.course_fk)
        });
        this.subjects = result;
        this.subjectsFiltered = result
      }
    );
  }

  save() {
    if (this.newSubject.id) {
      this.subjectService.update(this.newSubject).subscribe(r => this.getAll());
    } else {
      this.subjectService.save(this.newSubject).subscribe(r => this.getAll());
    }
    
    this.newSubject = new Subject();
  }

  edit(subject : Subject) {
    this.newSubject = new Subject(subject.id, subject.name, subject.period, subject.workload, subject.course);
  }

  delete(subject : Subject) {
    this.subjectService.delete(subject).subscribe(res => this.getAll());
  }

  search() {
    if (this.filter && this.filter.trim() !== '') {
      let f = this.filter.toLowerCase();

      this.subjects = this.subjectsFiltered.filter(item => 
          item.name.toLowerCase().startsWith(f) || item.course.name.toLowerCase().startsWith(f)
      );
    } else {
      this.subjects = this.subjectsFiltered;
    }
  }

}
