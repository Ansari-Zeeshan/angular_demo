import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent implements OnInit {
  show = 'yes';
  color = 'orange';
  color2 = 'asafds';

  constructor() { }

  ngOnInit(): void {
  }

}
