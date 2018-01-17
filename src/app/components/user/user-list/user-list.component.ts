import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userlist;

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(data => this.userlist = data);
  }

  ngOnInit() {
    console.log(this.userlist);
  }

}
