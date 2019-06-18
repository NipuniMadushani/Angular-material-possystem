import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ManageItemComponent } from './manage-item/manage-item.component';

@NgModule({
  declarations: [ManageItemComponent],
  imports: [
    CommonModule,
    ItemRoutingModule
  ]
})
export class ItemModule { }
