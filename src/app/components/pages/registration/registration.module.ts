import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [
    ContentComponent,
  //  RegistrationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule
  ]
})
export class RegistrationModule { }
