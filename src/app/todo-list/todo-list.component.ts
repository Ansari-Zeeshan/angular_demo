import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  list:any[] = [];

  ngOnInit(): void {
  }

  addtask(item:string){
    this.list.push({id:this.list.length, name:item})
    console.log(this.list);
  }

  delTask(id:number){
    this.list = this.list.filter(item => item.id!==id)
  }
}
