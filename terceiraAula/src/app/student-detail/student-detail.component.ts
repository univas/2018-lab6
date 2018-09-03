import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() studentDetail : any;

  constructor() { }

  ngOnInit() {
  }

}
