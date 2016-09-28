import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  user: User = new User();
  submitted: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
  }

}
