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
  startDate: any = { formatted: '' };
  endDate: any = { formatted: '' };

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

  filterStartDate(e: any){
    this.startDate = e;
  }

  filterEndDate(e: any){
    this.endDate = e;
  }

  filterByDate(){
    let stDate = moment(this.startDate.formatted).format('YYYY-MM-DD');
    let edDate = moment(this.endDate.formatted).format('YYYY-MM-DD');
    let citiesDates: City[] = [];
    citiesDates = this.cities.filter(
      (city) => {
        if (moment(city.start_date).format('YYYY-MM-DD') >= stDate && moment(city.end_date).format('YYYY-MM-DD') <= edDate ){
          return true;
        }

        return false;
      }
    );
    this.cities = citiesDates;
  }


}
