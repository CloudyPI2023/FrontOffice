import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './components/pages/registration/registration.component';
import { ForgetPasswordComponent } from './components/pages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';
import { LoginComponent } from './components/pages/login/login.component';


import { SharedModule } from './components/shared/shared.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';



@NgModule({
  declarations: [
    AppComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
