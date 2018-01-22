import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: number;
  user: User;

  constructor(private route: ActivatedRoute, private  userService: UserService) {
    this.id = +this.route.snapshot.params['id'];
    this.userService.getUserById$(this.id).subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

}
