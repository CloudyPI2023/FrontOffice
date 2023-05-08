import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { HeaderComponent } from './header/header.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { GallerySliderComponent } from './gallery-slider/gallery-slider.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { ServiceSidebarComponent } from './service-sidebar/service-sidebar.component';
import { DoctorSidebarComponent } from './doctor-sidebar/doctor-sidebar.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { ClinicSidebarComponent } from './clinic-sidebar/clinic-sidebar.component';
import { SmallCartComponent } from './small-cart/small-cart.component';
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';
import { AssociationComponent } from 'src/app/association/association.component';
import { DonationComponent } from 'src/app/donation/donation.component';
import { RequestComponent } from 'src/app/request/request.component';
import { AddDonationComponent } from 'src/app/donation/add-donation/add-donation.component';
import { MyDonationsComponent } from 'src/app/donation/my-donations/my-donations.component';
import { ContactDonationComponent } from 'src/app/donation/contact-donation/contact-donation.component';
import { DonationsGiftComponent } from 'src/app/donation/donations-gift/donations-gift.component';
import { CollectComponent } from 'src/app/donation/collect/collect.component';
import { AddAssociationComponent } from 'src/app/association/add-association/add-association.component';
import { MyAssociationComponent } from 'src/app/association/my-association/my-association.component';
import { AssociationRequestsComponent } from 'src/app/association-requests/association-requests.component';
import { AddRequestComponent } from 'src/app/association-requests/add-request/add-request.component';
import { ArticleComponent } from 'src/app/article/article.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArticleDetailComponent } from 'src/app/article-detail/article-detail.component';
import { CommentComponent } from 'src/app/comment/comment.component';




@NgModule({
  declarations: [
    HeaderComponent,
    HeaderTwoComponent,
    FooterComponent,
    BreadcrumbsComponent,
    GallerySliderComponent,
    BlogSidebarComponent,
    ServiceSidebarComponent,
    DoctorSidebarComponent,
    MobileMenuComponent,
    ClinicSidebarComponent,
    SmallCartComponent,
    ShopSidebarComponent,
    AssociationComponent,
    DonationComponent,
    RequestComponent,
    AddDonationComponent,
    MyDonationsComponent,
    ContactDonationComponent,
    DonationsGiftComponent,
    CollectComponent,
    AddAssociationComponent,
    MyAssociationComponent,
    AssociationRequestsComponent,
    AddRequestComponent,
    ArticleComponent,
    ArticleDetailComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    FormsModule,
    SlickCarouselModule,
    NgxSliderModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports:[
    HeaderComponent,
    HeaderTwoComponent,
    FooterComponent,
    BreadcrumbsComponent,
    GallerySliderComponent,
    BlogSidebarComponent,
    ServiceSidebarComponent,
    DoctorSidebarComponent,
    ClinicSidebarComponent,
    ShopSidebarComponent
  ]
})
export class SharedModule { }
