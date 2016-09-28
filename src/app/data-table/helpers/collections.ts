import * as moment from 'moment';
import { City } from '../../city';

export function filterByDate(array, startDate, endDate){
    let stDate = moment(startDate).format('YYYY-MM-DD');
    let edDate = moment(endDate).format('YYYY-MM-DD');
    let citiesDates: City[] = [];
    citiesDates = array.filter(
      (city) => {
        if (moment(city.start_date).format('YYYY-MM-DD') >= stDate && moment(city.end_date).format('YYYY-MM-DD') <= edDate ){
          return true;
        }

        return false;
      }
    );
    return citiesDates;
  }