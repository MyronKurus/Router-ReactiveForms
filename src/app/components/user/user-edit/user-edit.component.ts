import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  reactiveForm: FormGroup;
  firstName: string;
  lastName: string;
  phone: number;
  email: string;

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = formBuilder.group({
      'firstName': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'lastName': [null, Validators.required],
      'phone': [null, Validators.required],
      'email': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  onUserSave(user) {
    console.log(user);
  }

}
