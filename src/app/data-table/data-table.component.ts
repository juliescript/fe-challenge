import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { CITIES } from '../mock-cities';
import * as moment from 'moment';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  providers: [CityService]
})
export class DataTableComponent implements OnInit {

  cities: City[] = [];
  field: string;

  constructor( private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getCities().then(cities => {
      this.cities = cities.map(city => {
        city.start_date = new Date(city.start_date);
        city.end_date = new Date(city.end_date);
        return city;
      });
    });
  }

  sortBy(field: string){
    this.field = field;
  }


}
