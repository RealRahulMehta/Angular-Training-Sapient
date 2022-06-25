import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Timestamp } from '../counter-service.component';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss'],
})
export class TimestampComponent implements OnInit, OnDestroy {
  actionArray: Timestamp[] = [];
  private unsubscribe = new Subject();

  constructor(private counterSvc: CounterService) {}

  ngOnInit(): void {
    this.counterSvc.timeStampArray
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        this.actionArray = res;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
