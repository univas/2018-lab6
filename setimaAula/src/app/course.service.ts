import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses : Course[] = [];

  constructor() { }

  getAll() {
    return this.courses;
  }

  save(course : Course) {
    this.courses.push(course);
  }

  update(course : Course) {
    let oldCourse = this.courses.find( c => c.id === course.id);
    oldCourse.name = course.name;
    oldCourse.period = course.period;
  }

  delete(course : Course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
