import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {

  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.reactiveForm = formBuilder.group({
      'firstName': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'lastName': [null, Validators.required],
      'email': [null, Validators.required],
      'phone': [null, Validators.required]
    });
  }

  onUserSave(user: User) {
    this.userService.createUser(user);
  }

}
