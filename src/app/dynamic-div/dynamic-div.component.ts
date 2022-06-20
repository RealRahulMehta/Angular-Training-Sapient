import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss'],
})
export class DynamicDivComponent implements OnInit {
  divs: number[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 1000; i++) {
      this.divs.push(i);
    }
  }

  showAlert(idx: number): void {
    alert(`Button ${idx} clicked.`);
  }
}
