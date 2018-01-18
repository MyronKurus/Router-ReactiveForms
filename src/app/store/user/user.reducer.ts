import { User } from '../../models/user.model';
import {S_CREATE_USER} from './user.action';

const initialState: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@email.com',
    phone: '2223334455'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@email.com',
    phone: '2223334456'
  },
]

function generateUser(currentState: User[], data) {
  const id = currentState.length + 1;
  const user: User = {id, ...data};
  currentState.push(user);
  return currentState;
}

export function users(state = initialState, { type, payload } ) {
  switch ( type ) {
    case S_CREATE_USER:
      // console.log(payload);
      // ;
      return generateUser(state, payload);
    default: return state;
  }
}
