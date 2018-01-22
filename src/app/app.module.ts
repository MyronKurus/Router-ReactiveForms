import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { users } from './store/user/user.reducer';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserService } from './services/user.service';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostService } from './services/post.service';
import {posts} from './store/post/post.reducer';

const appRoutes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'create',
    component: UserEditComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'user/:id/post',
    component: PostComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserEditComponent,
    PostComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore({users, posts}),
    EffectsModule.run(UserEffects)
  ],
  providers: [
    UserService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
