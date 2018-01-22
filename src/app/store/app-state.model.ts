import {User} from '../models/user.model';
import {Post} from '../models/post.model';

export interface AppState {
  users: User[];
  posts: Post[];
}
