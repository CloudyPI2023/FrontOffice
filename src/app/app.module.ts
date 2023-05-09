import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AddReclamationComponent } from './components/reclamation-management/add-reclamation/add-reclamation.component';
import { AddProductComponent } from './components/pages/product-management/add-product/add-product.component';
import { CommandComponent } from './components/command/command.component';
import { MyCommandsComponent } from './components/command/my-commands/my-commands.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductManagementComponent,
    ReclamationManagementComponent,
    CategoryManagementComponent,
    GiftManagementComponent,
    SearchPipe,
    AddReclamationComponent,
    AddProductComponent,
    
    
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
    ReactiveFormsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
