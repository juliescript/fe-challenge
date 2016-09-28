/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormValidationComponent } from './form-validation.component';
let chai = require('chai');
let assert = chai.assert;

describe('Component: FormValidation', () => {
  it('should create an instance', () => {
    let component = new FormValidationComponent();
    expect(component).toBeTruthy();
  });

  it('should have valid methods', () => {
    let component = new FormValidationComponent();
    expect(component).toBeTruthy();
    expect(component.ngOnInit).toBeTruthy();
    expect(component.onSubmit).toBeTruthy();
  });

});
