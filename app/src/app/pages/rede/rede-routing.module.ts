import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RedeComponent} from "./rede.component";

const routes: Routes = [
  {path:'', component:RedeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedeRoutingModule { }
