// export const U_GET_ALL_USERS = 'U_GET_ALL_USERS';
import {Action} from '@ngrx/store';

export const U_GET_CURRENT_USER = 'U_GET_CURRENT_USER';
export const U_EDIT_CURRENT_USER = 'U_EDIT_CURRENT_USER';
export const U_SAVE_CURRENT_USER = 'U_SAVE_CURRENT_USER';
export const U_CREATE_USER = 'U_CREATE_USER';

// export const S_GET_ALL_USERS = 'S_GET_ALL_USERS';
export const S_GET_CURRENT_USER = 'S_GET_CURRENT_USER';
export const S_EDIT_CURRENT_USER = 'S_EDIT_CURRENT_USER';
export const S_SAVE_CURRENT_USER = 'S_SAVE_CURRENT_USER';
export const S_CREATE_USER = 'S_CREATE_USER';

export function createUserAction(user): Action {
  return {
    type: U_CREATE_USER,
    payload: { ...user }
  };
}

export function getCurrentUserAction(id): Action {
  console.log('getCurrentUserAction', id);
  return {
    type: U_GET_CURRENT_USER,
    payload: { ...id }
  };
}
