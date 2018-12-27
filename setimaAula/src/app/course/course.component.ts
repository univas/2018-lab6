import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  newCourse: Course;

  courses: Course[] = [];

  coursesFiltered: Course[];

  filter: string;

  constructor(private courseService: CourseService) {
    this.newCourse = new Course();
    this.getAll();
  }

  ngOnInit() {
  }

  getAll() {
    this.courseService.getAll().subscribe(
      result => {
        this.courses = result
        this.coursesFiltered = result
      }
    );
  }

  save() {

    if (this.newCourse.id) {
      this.courseService.update(this.newCourse).subscribe(
        result => this.getAll()
      );

    } else {
      this.courseService.save(this.newCourse).subscribe(
        result => this.getAll()
      );
    }

    this.newCourse = new Course();
  }

  edit(subject: Course) {
    this.newCourse = new Course(subject.id, subject.name, subject.workload);
  }

  delete(subject: Course) {
    this.courseService.delete(subject).subscribe(
      result => this.getAll()
    );
  }

  search() {
    if (this.filter && this.filter.trim() !== '') {
      let f = this.filter.toLowerCase();

      this.courses = this.coursesFiltered.filter(item =>
        item.name.toLowerCase().startsWith(f) || item.workload.toString().toLowerCase().startsWith(f)
      );
    } else {
      this.courses = this.coursesFiltered;
    }
  }


}
