import { Component } from '@angular/core';
import { City } from './city';
import { CityService } from './city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newCity : City = new City();

  cities : City[];

  constructor(private cityService : CityService) {
    this.cities = cityService.getAll();
  }

  saveNewCity() {
    this.cityService.addNewCity(this.newCity);
    this.newCity = new City();
  }
}
