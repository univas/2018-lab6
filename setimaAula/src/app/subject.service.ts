import { Injectable } from '@angular/core';
import { Subject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjects : Subject[] = [];

  constructor() { }

  getAll() {
    return this.subjects;
  }

  save(subject : Subject) {
    this.subjects.push(subject);
  }

  update(subject : Subject) {
    let oldSubject = this.subjects.find( sub => sub.id === subject.id);
    oldSubject.name = subject.name;
    oldSubject.course = subject.course;
  }

  delete(subject : Subject) {
    let index = this.subjects.indexOf(subject);
    this.subjects.splice(index, 1);
  }
}
