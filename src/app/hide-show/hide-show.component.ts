import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hide-show',
  templateUrl: './hide-show.component.html',
  styleUrls: ['./hide-show.component.css']
})
export class HideShowComponent implements OnInit {
  display = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.display = !this.display;
  }

}
