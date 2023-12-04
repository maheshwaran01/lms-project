import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlockComponent } from './block/block.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { UserDashboradComponent } from './user-dashborad/user-dashborad.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    AdminPortalComponent,
    NavbarComponent,
    BlockComponent,
    MyProfileComponent,
    MyCoursesComponent,
    UserDashboradComponent,
    RegisterComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
