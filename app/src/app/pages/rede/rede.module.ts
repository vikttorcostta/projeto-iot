import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedeRoutingModule } from './rede-routing.module';
import { RedeComponent } from './rede.component';


@NgModule({
  declarations: [
    RedeComponent
  ],
  imports: [
    CommonModule,
    RedeRoutingModule
  ]
})
export class RedeModule { }
