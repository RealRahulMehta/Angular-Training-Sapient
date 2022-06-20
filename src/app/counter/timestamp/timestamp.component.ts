import { Component, Input, OnInit } from '@angular/core';
import { Timestamp } from '../counter.component';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss']
})
export class TimestampComponent implements OnInit {

  @Input() actionArray: Timestamp[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
