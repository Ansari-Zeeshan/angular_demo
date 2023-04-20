import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {
  accObj = [
    {
      heading: 'Animation 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti molestias magni molestiae et, possimus minus aspernatur at impedit saepe quisquam cumque deleniti porro consequuntur vero facere, nisi dolorem natus.'
    },
    {
      heading: 'Animation 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti molestias magni molestiae et, possimus minus aspernatur at impedit saepe quisquam cumque deleniti porro consequuntur vero facere, nisi dolorem natus.'
    },
    {
      heading: 'Animation 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti molestias magni molestiae et, possimus minus aspernatur at impedit saepe quisquam cumque deleniti porro consequuntur vero facere, nisi dolorem natus.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  openContent(e:any){
    let con = e.target.parentNode.querySelector('.accordian-con');
    let conActive = e.target.closest('.row').querySelector('.accordian-con.active');
    console.log(conActive);
    
    if(!con.classList.contains('active')){
      conActive.classList.remove('active');
      con.classList.add('active');
    }
  }



}
