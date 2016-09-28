import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { DatepickerModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { routing } from './app.routes';

import { CityService } from './city.service';
import { SortByPipe } from './shared/pipes/sort-by.pipe';

import * as _ from 'lodash';

import { MyDatePickerComponent } from './shared/my-date-picker/my-date-picker.component';

import { FormValidationComponent } from './form-validation/form-validation.component';
import { EqualValidatorDirective } from './shared/directives/equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    SortByPipe,
    FormValidationComponent,
    EqualValidatorDirective,
    MyDatePickerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DatepickerModule
  ],
  exports: [
    SortByPipe,
    MyDatePickerComponent
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
