import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { appRoutingProviders, routing } from './app.routes';

import { CityService } from './city.service';
import { SortByPipe } from './shared/pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    SortByPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  exports: [
    SortByPipe,
  ],
  providers: [appRoutingProviders, CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
