import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state.model';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { createUserAction } from '../store/user/user.action';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(public store: Store<AppState>) {}

  getAllUsers$(): Observable<User[]> {
    return this.store.select('users');
  }

  createUser(user: User) {
    this.store.dispatch(createUserAction(user));
  }

  getUserById$(id) {
    return this.getAllUsers$().map(userList => userList.find(user => user.id === id));
  }

}
