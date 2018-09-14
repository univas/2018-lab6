import { Injectable } from '@angular/core';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cities : City[] = [];

  constructor() { }

  getAll() {
    return this.cities;
  }

  addNewCity(city: City) {
    this.cities.push(city);
  }

  deleteCity(city : City) {
    let index = this.cities.indexOf(city);
    this.cities.splice(index, 1);
  }

  updateCity(city : City) {
    let oldCity = this.cities.find(c => c.id === city.id);
    oldCity.name = city.name;
    oldCity.state = city.state;
  }

}
