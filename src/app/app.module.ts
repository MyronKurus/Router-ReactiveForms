import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { users } from './store/user/user.reducer';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserService } from './services/user.service';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    ReactiveFormsModule,
    StoreModule.provideStore({users})
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
