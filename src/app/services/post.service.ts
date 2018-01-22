import {Injectable} from '@angular/core';
import {AppState} from '../store/app-state.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Post} from '../models/post.model';
import {createPostAction} from '../store/post/post.action';

@Injectable()
export class PostService {

  constructor(public store: Store<AppState>) {}

  getAllPosts$(): Observable<Post[]> {
    return this.store.select('posts');
  }

  createPost(post: Post) {
    this.store.dispatch(createPostAction(post));
  }
}
