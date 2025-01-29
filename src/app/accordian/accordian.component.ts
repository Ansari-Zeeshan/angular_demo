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
  ];

  constructor() {
    // Initialize if needed in the future
  }

  ngOnInit(): void {
    // Lifecycle logic here (if needed in the future)
  }

  openContent(e: MouseEvent): void {
    const con = (e.target as HTMLElement).parentNode?.querySelector('.accordian-con');
    const conActive = e.target.closest('.row')?.querySelector('.accordian-con.active');
    
    if (con && !con.classList.contains('active')) {
      conActive?.classList.remove('active');
      con.classList.add('active');
    }
  }
}
