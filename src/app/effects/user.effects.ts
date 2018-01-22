import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { S_CREATE_USER, U_CREATE_USER } from '../store/user/user.action';
import { S_CREATE_POST, U_CREATE_POST } from '../store/post/post.action';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions) { }

  @Effect() createUser$ = this.actions$
    .ofType(U_CREATE_USER)
    .switchMap((action) => {
      return Observable.of({
        type: S_CREATE_USER,
        payload: action.payload
      });
    });

  @Effect() createPost$ = this.actions$
    .ofType(U_CREATE_POST)
    .switchMap((action) => {
      return Observable.of({
        type: S_CREATE_POST,
        payload: action.payload
      });
    });
}
