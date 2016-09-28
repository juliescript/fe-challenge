/* tslint:disable */
import { Injectable } from '@angular/core';

import { CITIES } from './mock-cities';
import { City } from './city';


@Injectable()
export class CityService {

  constructor() { }

  getCities(): Promise<City[]> {
    return Promise.resolve(CITIES);
  }

}
