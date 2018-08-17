import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alunos';

  studentName = null;

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

  addNewCar() {
    //let carTemp = new Car();
    //carTemp.brand = this.myCar.brand;
    //carTemp.color = this.myCar.color;
    //carTemp.name = this.myCar.name;
    //carTemp.price = this.myCar.price;
    //carTemp.year = this.myCar.year;

    //this.cars.push(carTemp);

    this.cars.push(this.myCar);
    this.myCar = new Car();
  }

  
}
