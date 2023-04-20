import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  input: any;
  arr: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  rowarr:any=[
    {
      val1: 1,
      val2: 2,
      val3: 3,
      val4: '/'
    },
    {
      val1: 4,
      val2: 5,
      val3: 6,
      val4: '*'
    },
    {
      val1: 7,
      val2: 8,
      val3: 9,
      val4: '-'
    },
    {
      val1: 0,
      val2: '.',
      val3: '=',
      val4: '+'
    }
  ];

  getValue(ev){
    this.input = document.querySelector('.calculator input');
    let num = ev.target.innerText;
    let temp;
    this.arr.push(num);
    this.input.value += num;
    if(this.arr.length>=3){
      this.performAction(this.arr,temp,this.input);
    }
    
  }

  performAction(arr,temp,input){
    let operator = arr[1],
    num1 = +arr[0], num2 = +arr[2];
    switch(operator){
      case '+':
        temp = num1 + num2;
        break;
      case '-':
        temp = num1 - num2;
        break;
      case '*':
        temp = num1 * num2;
        console.log(temp);
        
        break;
      case '/':
        temp = num1 / num2;
        break;
      case '=':
        input.value = temp;
        break;
    }
    arr = [];
    arr.push(temp);
  }

  clearAll(){
    this.input.value=null; 
    this.arr=[];
  }

}
