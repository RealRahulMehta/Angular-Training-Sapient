import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter-service',
  templateUrl: './counter-service.component.html',
  styleUrls: ['./counter-service.component.scss'],
})
export class CounterServiceComponent implements OnInit, OnDestroy {
  startTimer = 0;
  interval!: ReturnType<typeof setTimeout>;
  timeStampArray: Timestamp[] = [];
  pauseArray: Timestamp[] = [];
  pauseCount = 0;
  startCount = 0;
  private unsubscribe = new Subject();

  constructor(private counterSvc: CounterService) {}

  ngOnInit(): void {
    this.counterSvc.start.pipe(takeUntil(this.unsubscribe)).subscribe((res) => {
      if (res || res === 0) {
        this.handleStartChange(Number(res));
      }
    });

    this.counterSvc.pause.pipe(takeUntil(this.unsubscribe)).subscribe((res) => {
      if (res) {
        this.handlePauseChange();
      }
    });

    this.counterSvc.reset.pipe(takeUntil(this.unsubscribe)).subscribe((res) => {
      if (res) {
        this.handleResetChange();
      }
    });
  }

  handleStartChange(value: number) {
    if (value && value > 0) {
      this.startTimer = value;
      this.counterSvc.timer.next(this.startTimer);
      const timestamp = {
        type: 'start',
        time: new Date(),
        value: this.startTimer,
      };
      this.timeStampArray.push(timestamp);
      this.counterSvc.timeStampArray.next(this.timeStampArray);
      this.updateButtonAction('start');
      this.interval = setInterval(() => {
        if (this.startTimer > 0) {
          this.startTimer--;
          this.counterSvc.timer.next(this.startTimer);
        }
      }, 1000);
    } else if (value === 0 && this.startTimer > 0) {
      const timeObj = {
        type: 'start',
        time: new Date(),
        value: this.startTimer,
      };
      this.timeStampArray.push(timeObj);
      this.counterSvc.timeStampArray.next(this.timeStampArray);

      this.updateButtonAction('start');
      this.interval = setInterval(() => {
        if (this.startTimer > 0) {
          this.startTimer--;
          this.counterSvc.timer.next(this.startTimer);
        }
      }, 1000);
    }
  }

  handlePauseChange() {
    const timestamp = {
      type: 'pause',
      time: new Date(),
      value: this.startTimer,
    };
    this.timeStampArray.push(timestamp);
    this.counterSvc.timeStampArray.next(this.timeStampArray);

    this.updateButtonAction('pause');
    clearInterval(this.interval);
  }

  handleResetChange() {
    clearInterval(this.interval);
    this.startTimer = 0;
    this.counterSvc.timer.next(this.startTimer);
    this.timeStampArray.length = 0;
    this.counterSvc.timeStampArray.next(this.timeStampArray);
    this.pauseArray.length = 0;
    this.startCount = 0;
    this.pauseCount = 0;
    this.counterSvc.pauseCount.next(this.pauseCount);
    this.counterSvc.startCount.next(this.startCount);
  }

  updateButtonAction(action: string) {
    if (action === 'start') {
      const startArray = this.timeStampArray.filter(
        (actionObj: Timestamp) => actionObj.type === 'start'
      );
      this.startCount = startArray.length;
      this.counterSvc.startCount.next(this.startCount);
    } else {
      const pauseArray = this.timeStampArray.filter(
        (actionObj: Timestamp) => actionObj.type === 'pause'
      );
      this.pauseCount = pauseArray.length;
      this.counterSvc.pauseCount.next(this.pauseCount);
      this.pauseArray = pauseArray;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

export interface Timestamp {
  type: string;
  time: Date;
  value: number;
}
