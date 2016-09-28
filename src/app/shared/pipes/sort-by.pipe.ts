import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'sortBy', pure: false})
export class SortByPipe implements PipeTransform {


    transform(input: Object[], field: string, desc: boolean = false): Object[] {
        if (input && field) {
        return Array.from(input).sort((a: Object, b: Object) => {
            if (_.get(a, field) < _.get(b, field)) {
            return desc ? 1 : -1;
            }
            if (_.get(a, field) > _.get(b, field)) {
            return desc ? -1 : 1;
            }
            return 0;
        });
        }
        return input;
    }
}
