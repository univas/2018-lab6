import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOption = {
  headers : new HttpHeaders({"Content-Type" : "application/json"})
};

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

  save(course : Course) : Observable<Course> {
    return this.http.post<Course>(this.courseAPI, course, httpOption);
  }

  update(course : Course) : Observable<Course> {
    return this.http.put<Course>(this.courseAPI + '/' + course.id, course, httpOption);
  }

  delete(course : Course) : Observable<Course> {
    return this.http.delete<Course>(this.courseAPI + '/' + course.id);
  }
}
