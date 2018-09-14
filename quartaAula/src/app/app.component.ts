import { Component } from '@angular/core';
import { City } from './city';
import { CityService } from './city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newCity: City = new City();

  cities: City[];

  constructor(private cityService: CityService) {
    this.cities = cityService.getAll();
  }

  saveNewCity() {
    if (this.validateFields()) {
      if (this.newCity.id) {
        this.cityService.updateCity(this.newCity);
  
      } else {
        this.newCity.id = (new Date()).getTime();
        this.cityService.addNewCity(this.newCity);
      }
  
      this.newCity = new City();
    }
  }

  validateFields(): boolean {
    if (!this.newCity.name || this.newCity.name.trim() === '' ||
      !this.newCity.state || this.newCity.state.trim() === '') {
      return false;
    }

    return true;
  }

  edit(city: City) {
    this.newCity = new City(city.id, city.name, city.state);
  }

  remove(city: City) {
    this.cityService.deleteCity(city);
  }
}
