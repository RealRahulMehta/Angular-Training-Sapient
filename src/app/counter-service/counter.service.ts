import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Timestamp } from './counter-service.component';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  timer = new BehaviorSubject<number | null>(null);
  start = new BehaviorSubject<string | number | null>(null);
  pause = new BehaviorSubject<boolean>(false);
  reset = new BehaviorSubject<boolean>(false);
  timeStampArray = new BehaviorSubject<Timestamp[]>([]);
  pauseCount = new BehaviorSubject<number>(0);
  startCount = new BehaviorSubject<number>(0);

  constructor() {}
}
