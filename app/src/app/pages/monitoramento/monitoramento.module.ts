import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoramentoRoutingModule } from './monitoramento-routing.module';
import { MonitoramentoComponent } from './monitoramento.component';


@NgModule({
  declarations: [
    MonitoramentoComponent
  ],
  imports: [
    CommonModule,
    MonitoramentoRoutingModule
  ]
})
export class MonitoramentoModule { }
