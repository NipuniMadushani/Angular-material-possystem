import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import {MaterialModule} from '../../material/material.module';

@NgModule({
  declarations: [ManageCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class CustomerModule { }
