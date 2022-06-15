import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { TimerComponent } from './timer/timer.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { ClickLogComponent } from './click-log/click-log.component';
import { TimerLimitComponent } from './timer-limit/timer-limit.component';


@NgModule({
  declarations: [
    CounterComponent,
    TimerComponent,
    TimestampComponent,
    ClickLogComponent,
    TimerLimitComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule
  ]
})
export class CounterModule { }
