import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterServiceRoutingModule } from './counter-service-routing.module';
import { CounterServiceComponent } from './counter-service.component';
import { TimerComponent } from './timer/timer.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { ClickLogComponent } from './click-log/click-log.component';
import { TimerLimitComponent } from './timer-limit/timer-limit.component';

@NgModule({
  declarations: [
    CounterServiceComponent,
    TimerComponent,
    TimestampComponent,
    ClickLogComponent,
    TimerLimitComponent,
  ],
  imports: [CommonModule, CounterServiceRoutingModule],
})
export class CounterServiceModule {}
