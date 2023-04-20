import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {
  @Input() DayName:string = '';
  @Input() todDate:any ;
  constructor() { }

  ngOnInit(): void {

  }

}
