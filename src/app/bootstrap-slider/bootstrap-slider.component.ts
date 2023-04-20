import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-slider',
  templateUrl: './bootstrap-slider.component.html',
  styleUrls: ['./bootstrap-slider.component.scss']
})
export class BootstrapSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  slider_content=[
    {
      header:'First slide label',
      text:'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      header:'Second slide label',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      header:'Third slide label',
      text:'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    }
  ]

}
