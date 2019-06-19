import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ManageItemComponent } from './manage-item/manage-item.component';
import {MaterialModule} from '../../material/material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ManageItemComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ItemModule { }
