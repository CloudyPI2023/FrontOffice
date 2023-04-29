import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductManagementComponent } from './components/pages/product-management/product-management.component';
import { ReclamationManagementComponent } from './components/pages/reclamation-management/reclamation-management.component';
import { CategoryManagementComponent } from './components/pages/category-management/category-management.component';
import { GiftManagementComponent } from './components/pages/gift-management/gift-management.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductManagementComponent,
    ReclamationManagementComponent,
    CategoryManagementComponent,
    GiftManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
