import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssociationComponent } from './association/association.component';
import { DonationComponent } from './donation/donation.component';
import { RequestComponent } from './request/request.component';
import { MyDonationsComponent } from './donation/my-donations/my-donations.component';
import { ContactDonationComponent } from './donation/contact-donation/contact-donation.component';
import { DonationsGiftComponent } from './donation/donations-gift/donations-gift.component';
import { CollectComponent } from './donation/collect/collect.component';
import { MyAssociationComponent } from './association/my-association/my-association.component';
import { AddAssociationComponent } from './association/add-association/add-association.component';
import { AssociationRequestsComponent } from './association-requests/association-requests.component';
import { AddRequestComponent } from './association-requests/add-request/add-request.component';
import { SharedModule } from './components/shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArticleDetailComponent } from './article-detail/article-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
