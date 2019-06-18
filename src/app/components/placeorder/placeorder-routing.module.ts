import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageItemComponent} from '../item/manage-item/manage-item.component';
import {ManagePlaceorderComponent} from './manage-placeorder/manage-placeorder.component';

const routes: Routes = [
  {
    path: '',
    component: ManagePlaceorderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceorderRoutingModule { }
