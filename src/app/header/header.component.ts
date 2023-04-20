import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navList = ['Home','About','Contact','Gallery'];
  java:string  = 'programming';
  constructor() { }

  ngOnInit(): void {
  }


}
