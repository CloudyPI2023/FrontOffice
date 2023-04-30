import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RegistrationComponent } from './registration.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ,
  //  RegistrationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule,
    MatSelectModule
  ]
})
export class RegistrationModule { }
