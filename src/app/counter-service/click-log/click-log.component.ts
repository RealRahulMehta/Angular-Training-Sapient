import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-click-log',
  templateUrl: './click-log.component.html',
  styleUrls: ['./click-log.component.scss'],
})
export class ClickLogComponent implements OnInit, OnDestroy {
  pauseCount = 0;
  startCount = 0;
  private unsubscribe = new Subject();
  constructor(private counterSvc: CounterService) {}

  ngOnInit(): void {
    this.counterSvc.pauseCount
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        this.pauseCount = res;
      });

    this.counterSvc.startCount
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        this.startCount = res;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
