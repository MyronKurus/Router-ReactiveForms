import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const U_CREATE_USER = 'U_CREATE_USER';
export const S_CREATE_USER = 'S_CREATE_USER';

export function createUserAction(user: User): Action {
  return {
    type: U_CREATE_USER,
    payload: { ...user }
  };
}
