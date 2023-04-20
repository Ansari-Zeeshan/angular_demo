import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  @Input() my_modal_title;
  @Input() my_modal_content;

  constructor() { }

  ngOnInit(): void {
  }

}
