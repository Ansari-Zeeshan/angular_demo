import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-things',
  templateUrl: './style-things.component.html',
  styleUrls: ['./style-things.component.css']
})
export class StyleThingsComponent implements OnInit {
  color3 = 'red';
  bgColor = 'green';

  constructor() { }

  ngOnInit(): void {
  }

  chgStyle(){
    if(this.color3 === 'red' && this.bgColor === 'green'){
      this.color3 = 'green';
      this.bgColor = 'red';
    }
    else{
      this.color3 = 'red';
      this.bgColor = 'green';
    }   
  }

}
