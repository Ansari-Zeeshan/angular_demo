import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-browser-specific',
  templateUrl: './browser-specific.component.html',
  styleUrls: ['./browser-specific.component.css']
})
export class BrowserSpecificComponent implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const elem = this.elementRef.nativeElement.querySelector('p');
    if(navigator.userAgent.indexOf("Firefox") != -1){
      this.renderer.setStyle(elem, 'color', 'red');
      this.renderer.setStyle(elem, 'font-size', '25px');
    }
  }
}
