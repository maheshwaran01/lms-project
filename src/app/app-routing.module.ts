import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { UserDashboradComponent } from './user-dashborad/user-dashborad.component';
import { RegisterComponent } from './register/register.component';
// import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component:SigninComponent,
  },
  {
    path:'login',
    component:LoginComponent,

  },
  {
  path:'forgot-password',
  component:ForgotPasswordComponent,
  },
  {
  path:'dashboard',
  component:DashboardComponent,
  // canActivate:[authGuard]
  },
  {
  path:'admin-portal',
  component:AdminPortalComponent,
  //  canActivate:[authGuard]
  },
  {
  path:'my-profile',
  component:MyProfileComponent,
  //  canActivate:[authGuard]
  },
  {
  path:'my-courses',
  component:MyCoursesComponent,
  //  canActivate:[authGuard]
  },
  {
  
  path:'user-dashboard',
  component:UserDashboradComponent,
  //  canActivate:[authGuard]
  },
  {
  path:'register',
  component:RegisterComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
