import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects : Subject[];  

  newSubject : Subject;

  showError : boolean = false;

  constructor(private subjectService : SubjectService) {
    this.subjects = subjectService.getAll();
    this.newSubject = new Subject();
  }

  ngOnInit(): void {
  }

  save() {
    if (this.isValidSubject()) {
      if (this.newSubject.id) {
        this.subjectService.update(this.newSubject);
      } else {
        this.newSubject.id = (new Date()).getTime();
        this.subjectService.save(this.newSubject);
      }
      
      this.showError = false;
      this.newSubject = new Subject();
    } else {
      this.showError = true;
    }
  }

  isValidSubject() {
    if (!this.newSubject.name || this.newSubject.name.trim() === '' ||
        !this.newSubject.course || this.newSubject.course.trim() === '') {
      return false;
    }
    return true;
  }

  edit(subject : Subject) {
    this.newSubject = new Subject(subject.id, subject.name, subject.course);
  }

  delete(subject : Subject) {
    this.subjectService.delete(subject);
  }

}
