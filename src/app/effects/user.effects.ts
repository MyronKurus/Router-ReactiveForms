import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {S_CREATE_USER, S_GET_CURRENT_USER, U_CREATE_USER, U_GET_CURRENT_USER} from '../store/user/user.action';
import 'rxjs/add/operator/switchMap';

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

  @Effect() getUser$ = this.actions$
    .ofType(U_GET_CURRENT_USER)
    .switchMap((action) => {
      console.log(action.payload);
      return Observable.of({
        type: S_GET_CURRENT_USER,
        payload: action.payload
      });
    });
}
