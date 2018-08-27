import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  student = {
    name: null,
    cpf: null,
    birthday: null,
    weight: null
  };

  students = [];

  addNewStudent() {
    let temp = Object.assign({}, this.student);
    this.students.push(temp);
  }


}
