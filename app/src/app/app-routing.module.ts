import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";



const routes: Routes = [


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
