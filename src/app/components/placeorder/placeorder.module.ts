import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceorderRoutingModule } from './placeorder-routing.module';
import { ManagePlaceorderComponent } from './manage-placeorder/manage-placeorder.component';
import {MaterialModule} from '../../material/material.module';

@NgModule({
  declarations: [ManagePlaceorderComponent],
  imports: [
    CommonModule,
    PlaceorderRoutingModule,
    MaterialModule
  ]
})
export class PlaceorderModule { }
