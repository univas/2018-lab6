import { Injectable } from '@angular/core';
import { Subject } from './subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOption = {
  headers : new HttpHeaders({"Content-Type" : "application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjectAPI = "https://pacific-wave-50441.herokuapp.com/api/subjects";
  //private subjectAPI = "http://localhost:3000/api/subjects";

  constructor(private http : HttpClient) { }

  getAll() : Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectAPI);

  }

  save(subject : Subject) : Observable<Subject> {
    return this.http.post<Subject>(this.subjectAPI, subject, httpOption);
  }

  update(subject : Subject) : Observable<Subject> {
    return this.http.put<Subject>(this.subjectAPI + '/' + subject.id, subject, httpOption);
  }

  delete(subject : Subject) : Observable<Subject> {
    return this.http.delete<Subject>(this.subjectAPI + '/' + subject.id);
  }
}
