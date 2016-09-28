import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

const routes: Routes = [
  { path: '', children: [
      { path: '', component: DataTableComponent },
      { path: 'form', component: FormValidationComponent }
  ]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);