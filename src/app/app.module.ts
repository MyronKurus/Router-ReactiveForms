import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { users } from './store/user/user.reducer';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserService } from './services/user.service';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
// import { Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatListModule, MatInputModule } from '@angular/material';
//
// const appRoutes: Route[] = [
//   {
//     path: 'create',
//     component: UserEditComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    StoreModule.provideStore({users}),
    EffectsModule.run(UserEffects)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
