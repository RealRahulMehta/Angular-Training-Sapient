import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Timestamp } from '../counter-service.component';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.scss'],
})
export class TimerLimitComponent implements OnInit {
  timerValue: number | string | null = null;
  isTimerStarted = false;
  pauseArray: Timestamp[] = [];
  private unsubscribe = new Subject();

  constructor(private counterSvc: CounterService) {}

  ngOnInit(): void {
    this.counterSvc.timeStampArray
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        this.pauseArray = res.filter(
          (actionObj: Timestamp) => actionObj.type === 'pause'
        );
      });
  }

  timerClicked() {
    this.isTimerStarted = !this.isTimerStarted;

    if (this.isTimerStarted) {
      if (this.timerValue) {
        this.counterSvc.start.next(this.timerValue);
        this.timerValue = null;
      } else {
        this.counterSvc.start.next(0);
      }
    } else {
      this.counterSvc.pause.next(true);
    }
  }

  resetTimer() {
    this.isTimerStarted = false;
    this.timerValue = null;
    this.counterSvc.reset.next(true);
  }
}
