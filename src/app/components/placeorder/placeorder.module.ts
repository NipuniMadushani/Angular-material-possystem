import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceorderRoutingModule } from './placeorder-routing.module';
import { ManagePlaceorderComponent } from './manage-placeorder/manage-placeorder.component';
import {MaterialModule} from '../../material/material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ManagePlaceorderComponent],
  imports: [
    CommonModule,
    PlaceorderRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class PlaceorderModule { }
