import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from './my-modal/my-modal.component';

@Directive({
  selector: '[appShowModal]'
})
export class ShowModalDirective {
  @Input() data: any;

  constructor(private modalService: NgbModal, private elementRef: ElementRef) { }

  @HostListener('click', ['$event'])

  onClick(event: Event){
    event.preventDefault();
    const modalRef:NgbModalRef = this.modalService.open(MyModalComponent, { centered: true});
    modalRef.componentInstance.data = this.data;
  }

}
