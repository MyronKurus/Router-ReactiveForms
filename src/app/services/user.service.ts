import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state.model';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import {createUserAction, getCurrentUserAction} from '../store/user/user.action';

@Injectable()
export class UserService {
  constructor(public store: Store<AppState>) {}

  getAllUsers(): Observable<User[]> {
    return this.store.select('users');
  }

  createUser(data) {
    this.store.dispatch(createUserAction(data));
  }

  getUserById(id) {
    this.store.dispatch(getCurrentUserAction(id));
  }

}
