import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { HomeComponent } from './home/home.component';

// import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
// import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
import { HospitalAdminLayoutComponent } from './layouts/hospitaladmin-layout/hospitaladmin-layout.component';
//import { HomeComponent } from './home/home.component';
//import { DoctorsLayoutComponent } from './layouts/doctors-layout/doctors-layout.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
//import { DashboardComponent } from 'app/layouts/hospitaladmin-components/dashboard/dashboard.component';

const routes: Routes =[

// for home page
{
  path: '',
  component: HomeComponent
},
// {
//   path: 'dashboard',
//   component: DashboardComponent
// },
  {
    path: 'doctor',
    redirectTo: 'doctor/doctor/dashboard',
    pathMatch: 'full',
  }, {
    path: 'doctor',
    component: DoctorLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/doctor-layout/doctor-layout.module#DoctorLayoutModule'
    }] 

  
  }, 
// system admin dashboard
 {
   path: 'systemAdmin',
 redirectTo: 'systemAdmin/systemAdmin/dashboard',
  pathMatch: 'full',
 }, 
    
  
  {
    path: 'systemAdmin',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
 

  // dispensary dashbaord
  {
    path: 'dispensaryAdmin',
  redirectTo: 'dispensaryAdmin/dispensaryAdmin/testing',
   pathMatch: 'full',
  }, 
  {
    path: 'dispensaryAdmin',
    component: DispensaryLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/dispensary-layout/dispensary-layout.module#DispensaryLayoutModule'
    }]
  },

  // for hospital admin

  {
    path: 'hospitalAdmin',
  redirectTo: 'hospitalAdmin/hospitalAdmin/testing2',
   pathMatch: 'full',
  }, 
  {
    path: 'hospitalAdmin',
    component: HospitalAdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/hospitaladmin-layout/hospitaladmin-layout.module#HospitalAdminLayoutModule'
    }]
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    
  },
  {
    path: 'reset-password',
    component: ForgotPasswordComponent,
    
  },
  {
    path: 'email-verify',
    component: VerifyEmailComponent,
    
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }