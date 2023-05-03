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
import { ReclamationManagementComponent } from './components/reclamation-management/reclamation-management.component';
import { CategoryManagementComponent } from './components/category-management/category-management.component';
import { GiftManagementComponent } from './components/gift-management/gift-management.component';
import { SharedModule } from './components/shared/shared.module';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductManagementComponent,
    ReclamationManagementComponent,
    CategoryManagementComponent,
    GiftManagementComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    NgbModule,
    HttpClientModule,
    SharedModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
