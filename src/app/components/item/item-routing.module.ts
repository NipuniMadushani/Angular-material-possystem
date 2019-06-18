import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageCustomerComponent} from '../customer/manage-customer/manage-customer.component';
import {ManageItemComponent} from './manage-item/manage-item.component';

const routes: Routes = [
  {
    path: '',
    component: ManageItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
