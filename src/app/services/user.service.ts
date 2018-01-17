import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state.model';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(public store: Store<AppState>) {}

  getAllUsers(): Observable<User[]> {
    return this.store.select('users');
  }
}
