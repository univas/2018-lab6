import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alunos';

  myCar : Car = new Car();
  

  
}
