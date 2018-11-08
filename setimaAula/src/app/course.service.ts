import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseAPI = "http://localhost:3000/api/courses";

  private courses : Course[] = [];

  constructor(private http : HttpClient) { }

  getAll() : Observable<Course[]> {
    return this.http.get<Course[]>(this.courseAPI);
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
    this.http.delete(this.courseAPI + '/' + course.id);
  }
}
