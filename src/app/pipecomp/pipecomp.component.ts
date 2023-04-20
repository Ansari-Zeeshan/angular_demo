import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipecomp',
  templateUrl: './pipecomp.component.html',
  styleUrls: ['./pipecomp.component.css']
})
export class PipecompComponent implements OnInit {
  todDate =  Date(); 

  constructor() { }

  ngOnInit(): void {
  }

}
