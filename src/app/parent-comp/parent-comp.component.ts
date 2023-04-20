import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {
  nameday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
  dateobj: any;
  constructor() { }

  ngOnInit(): void {
    this.dateobj = Date();
  }

}
