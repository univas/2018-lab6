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

  subjectsFiltered : Subject[];

  newSubject : Subject;

  showError : boolean = false;

  filter : string;

  constructor(private subjectService : SubjectService) {
    this.subjects = subjectService.getAll();
    this.subjectsFiltered = this.subjects;
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

  search() {
    if (this.filter && this.filter.trim() !== '') {
      let f = this.filter.toLowerCase();

      this.subjects = this.subjectsFiltered.filter(item => 
          item.name.toLowerCase().startsWith(f) || item.course.toLowerCase().startsWith(f)
      );
    } else {
      this.subjects = this.subjectsFiltered;
    }
  }

}
