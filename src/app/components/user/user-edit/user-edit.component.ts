import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  reactiveForm: FormGroup;
  // firstName: string;
  // lastName: string;
  // phone: number;
  // email: string;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.reactiveForm = formBuilder.group({
      'firstName': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'lastName': [null, Validators.required],
      'email': [null, Validators.required],
      'phone': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  onUserSave(user) {
    // console.log(user);
    this.userService.createUser(user);
  }

}
