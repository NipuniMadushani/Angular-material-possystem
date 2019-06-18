import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './components/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'customer',
    loadChildren: './components/customer/customer.module#CustomerModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
