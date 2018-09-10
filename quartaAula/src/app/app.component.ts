import { Component } from '@angular/core';
import { City } from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newCity : City = new City();

  cities : City[] = [];

  saveNewCity() {
    this.cities.push(this.newCity);
    this.newCity = new City();
  }
}
