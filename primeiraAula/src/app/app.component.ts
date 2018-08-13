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
  
  cars : Car[] = [];

  ngOnInit() {
    this.myCar.brand = 'Fiat';
    this.myCar.color = 'Cinza';
    this.myCar.name = 'Palio';
    this.myCar.price = 'R$ 17.523,87';
    this.myCar.year = 2012;
    this.createFakeCars();
  }

  createFakeCars() {
    let year = 2010;
    for (let i = 0; i < 5; i++) {
      let fakeCar = new Car();
      fakeCar.brand = 'Fiat';
      fakeCar.color = 'Cinza';
      fakeCar.name = 'Palio';
      fakeCar.price = 'R$ 15.000,00';
      fakeCar.year = year++;
      
      this.cars.push(fakeCar);
    }
  }

  
}
