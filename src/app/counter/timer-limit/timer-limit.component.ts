import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.scss'],
})
export class TimerLimitComponent implements OnInit {
  timerValue: number | string | null = null;
  isTimerStarted = false;
  @Output() start = new EventEmitter();
  @Output() pause = new EventEmitter();
  @Output() reset = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  timerClicked() {
    this.isTimerStarted = !this.isTimerStarted;

    if (this.isTimerStarted) {
      if (this.timerValue) {
        this.start.emit(this.timerValue);
        this.timerValue = null;
      } else {
        this.start.emit(0);
      }
    } else { 
      this.pause.emit();
    }
  }

  resetTimer() {
    this.isTimerStarted = false;
    this.timerValue = null;
    this.reset.emit();
  }
}
