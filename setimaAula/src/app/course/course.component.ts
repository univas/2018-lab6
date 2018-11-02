import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  newCourse : Course;

  courses : Course[];

  coursesFiltered : Course[];

  showError : boolean = false;

  filter : string;

  constructor(private courseService : CourseService) {
    this.courses = this.courseService.getAll();
    this.coursesFiltered = this.courses;
    this.newCourse = new Course();
  }

  ngOnInit() {
  }

  save() {
    if (this.isValidCourse()) {
      if (this.newCourse.id) {
        this.courseService.update(this.newCourse);
      } else {
        this.newCourse.id = (new Date()).getTime();
        this.courseService.save(this.newCourse);
      }
      
      this.showError = false;
      this.newCourse = new Course();
    } else {
      this.showError = true;
    }
  }

  isValidCourse() {
    if (!this.newCourse.name || this.newCourse.name.trim() === '' || !this.newCourse.period) {
      return false;
    }
    return true;
  }

  edit(subject : Course) {
    this.newCourse = new Course(subject.id, subject.name, subject.period);
  }

  delete(subject : Course) {
    this.courseService.delete(subject);
  }

  search() {
    if (this.filter && this.filter.trim() !== '') {
      let f = this.filter.toLowerCase();

      this.courses = this.coursesFiltered.filter(item => 
          item.name.toLowerCase().startsWith(f) || item.period.toString().toLowerCase().startsWith(f)
      );
    } else {
      this.courses = this.coursesFiltered;
    }
  }


}
