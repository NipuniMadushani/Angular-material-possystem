import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {SidebarComponent} from './components/sidebar/sidebar/sidebar.component';
import { ChartModule } from 'angular2-chartjs';
import {ChartsModule} from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule,
    ChartModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
