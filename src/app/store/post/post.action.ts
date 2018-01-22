import {Action} from '@ngrx/store';
import {Post} from '../../models/post.model';

export const U_CREATE_POST = 'U_CREATE_POST';
export const S_CREATE_POST = 'S_CREATE_POST';


export function createPostAction(post: Post): Action {
  return {
    type: U_CREATE_POST,
    payload: { ...post }
  };
}
