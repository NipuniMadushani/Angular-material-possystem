import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MaterialModule} from '../../material/material.module';
import {ChartsModule} from 'ng2-charts';
import {ChartModule} from 'angular2-chartjs';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ChartsModule,
    DashboardRoutingModule,
    MaterialModule,
    ChartModule,

  ]
})
export class DashboardModule { }
