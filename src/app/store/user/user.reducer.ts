import { User } from '../../models/user.model';

const initialState: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@email.com',
    phone: 2223334455
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@email.com',
    phone: 2223334456
  },
]


export function users(state = initialState, { type, payload } ) {
  switch (type) {
    default: return state;
  }
}
