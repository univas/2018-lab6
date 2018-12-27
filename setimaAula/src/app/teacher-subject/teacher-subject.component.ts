import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { SubjectService } from '../subject.service';
import { Teacher } from '../teacher';
import { Subject } from '../subject';

@Component({
  selector: 'app-teacher-subject',
  templateUrl: './teacher-subject.component.html',
  styleUrls: ['./teacher-subject.component.css']
})
export class TeacherSubjectComponent implements OnInit {

  teachers : Teacher[] = [];

  subjects : Subject[] = [];

  constructor(private teacherService : TeacherService, 
              private subjectService : SubjectService) {

    this.teacherService.getAll().subscribe(
      res => this.teachers = res
    );

    this.subjectService.getAll().subscribe(
      res => this.subjects = res
    );
  }

  ngOnInit() {
  }

}
