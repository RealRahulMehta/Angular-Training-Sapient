import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDivRoutingModule } from './dynamic-div-routing.module';
import { DynamicDivComponent } from './dynamic-div.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    DynamicDivComponent
  ],
  imports: [
    CommonModule,
    DynamicDivRoutingModule,
    ScrollingModule
  ]
})
export class DynamicDivModule { }
