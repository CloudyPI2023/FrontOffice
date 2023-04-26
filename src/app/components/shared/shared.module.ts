import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
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
import { AssociationDetailComponent } from 'src/app/association/association-detail/association-detail.component';
import { AssociationsComponent } from 'src/app/associations/associations.component';
import { RequestComponent } from 'src/app/request/request.component';



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
    AssociationDetailComponent,
    AssociationsComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    FormsModule,
    SlickCarouselModule,
    NgxSliderModule
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
