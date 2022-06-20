import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-log',
  templateUrl: './click-log.component.html',
  styleUrls: ['./click-log.component.scss']
})
export class ClickLogComponent implements OnInit {

  @Input() pauseCount = 0;
	@Input() startCount = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
