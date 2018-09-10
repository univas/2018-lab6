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

  deleteCity() {

  }

  updateCity() {
    
  }

}
