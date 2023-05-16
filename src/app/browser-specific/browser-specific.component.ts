import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-browser-specific',
  templateUrl: './browser-specific.component.html',
  styleUrls: ['./browser-specific.component.css']
})
export class BrowserSpecificComponent implements OnInit {

  constructor() {}
  
  ngOnInit(): void {
    // You can now access the appShowModal directive here
  }
}
