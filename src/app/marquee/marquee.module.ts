import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarqueeRoutingModule } from './marquee-routing.module';
import { MarqueeComponent } from './marquee.component';


@NgModule({
  declarations: [
    MarqueeComponent
  ],
  imports: [
    CommonModule,
    MarqueeRoutingModule
  ]
})
export class MarqueeModule { }
