import { Injectable } from '@angular/core';
import { Teacher } from './teacher';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOption = {
  headers : new HttpHeaders({"Content-Type" : "application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private teacherAPI = "https://pacific-wave-50441.herokuapp.com/api/teachers";

  constructor(private http : HttpClient) { }

  getAll() : Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teacherAPI);
  }

  save(teacher : Teacher) : Observable<Teacher> {
    return this.http.post<Teacher>(this.teacherAPI, teacher, httpOption);
  }

  update(teacher : Teacher) : Observable<Teacher> {
    return this.http.put<Teacher>(this.teacherAPI + '/' + teacher.id, teacher, httpOption);
  }

  delete(teacher : Teacher) : Observable<Teacher> {
    return this.http.delete<Teacher>(this.teacherAPI + '/' + teacher.id);
  }

}
