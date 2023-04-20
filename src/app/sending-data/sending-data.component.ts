import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sending-data',
  templateUrl: './sending-data.component.html',
  styleUrls: ['./sending-data.component.css']
})
export class SendingDataComponent implements OnInit {
  data = ['Peter','Jenny','John','Tommy'];

  constructor() { }

  ngOnInit(): void {
  }

}
