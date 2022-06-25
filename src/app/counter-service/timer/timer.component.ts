import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CounterService } from '../counter.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  timer = 0;
  interval!: ReturnType<typeof setTimeout>;
  private unsubscibe = new Subject();

  constructor(private counterSvc: CounterService) {}

  ngOnInit(): void {
    this.counterSvc.timer
      .pipe(takeUntil(this.unsubscibe))
      .subscribe((value) => {
        if (value !== null) {
          this.timer = value;
        }
      });
  }

  ngOnDestroy() {
    this.unsubscibe.next();
    this.unsubscibe.complete();
  }
}
