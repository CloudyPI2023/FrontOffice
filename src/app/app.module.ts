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
import { ProductManagementComponent } from './components/views/product-management/product-management.component';
import { ReclamationManagementComponent } from './components/views/reclamation-management/reclamation-management.component';
import { CategoryManagementComponent } from './components/views/category-management/category-management.component';
import { GiftManagementComponent } from './components/views/gift-management/gift-management.component';
import { AddReclamationComponent } from './components/views/reclamation-management/add-reclamation/add-reclamation.component';
import { AddProductComponent } from './components/views/product-management/add-product/add-product.component';
import { SearchPipe } from './search.pipe';



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
