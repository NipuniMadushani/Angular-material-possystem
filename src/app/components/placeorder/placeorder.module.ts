import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceorderRoutingModule } from './placeorder-routing.module';
import { ManagePlaceorderComponent } from './manage-placeorder/manage-placeorder.component';

@NgModule({
  declarations: [ManagePlaceorderComponent],
  imports: [
    CommonModule,
    PlaceorderRoutingModule
  ]
})
export class PlaceorderModule { }
