import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  startTimer = 0;
  interval!: ReturnType<typeof setTimeout>;
  timeStampArray: Timestamp[] = [];
  pauseArray: Timestamp[] = [];
  pauseCount = 0;
  startCount = 0;

  constructor() {}

  ngOnInit(): void {}

  handleStartChange(value: number) {
    if (value && value > 0) {
      this.startTimer = value;
      const timestamp = {
        type: 'start',
        time: new Date(),
        value: this.startTimer,
      };
      this.timeStampArray.push(timestamp);
      this.updateButtonAction('start');
      this.interval = setInterval(() => {
        if (this.startTimer > 0) {
          this.startTimer--;
        }
      }, 1000);
    } else if (value === 0 && this.startTimer > 0) {
      const timeObj = {
        type: 'start',
        time: new Date(),
        value: this.startTimer,
      };
      this.timeStampArray.push(timeObj);
      this.updateButtonAction('start');
      this.interval = setInterval(() => {
        if (this.startTimer > 0) {
          this.startTimer--;
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
    this.updateButtonAction('pause');
    clearInterval(this.interval);
  }

  handleResetChange() {
    clearInterval(this.interval);
    this.startTimer = 0;
    this.timeStampArray.length = 0;
    this.pauseArray.length = 0;
    this.startCount = 0;
    this.pauseCount = 0;
  }

  updateButtonAction(action: string) {
    if (action === 'start') {
      const startArray = this.timeStampArray.filter((actionObj: Timestamp) =>  actionObj.type === 'start');
      this.startCount = startArray.length;
    } else {
      const pauseArray = this.timeStampArray.filter((actionObj: Timestamp) => actionObj.type === 'pause');
      this.pauseCount = pauseArray.length;
      this.pauseArray = pauseArray;
    }
  }
}

export interface Timestamp {
  type: string;
  time: Date;
  value: number;
}
