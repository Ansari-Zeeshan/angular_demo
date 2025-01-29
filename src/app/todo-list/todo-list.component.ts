import { Component } from '@angular/core';

interface Task {
  id: number;
  name: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  // List will now hold Task objects instead of using `any[]`
  list: Task[] = [];

  // Add task to the list, now with a specific type for the input parameter
  addTask(item: string): void {
    const newTask: Task = { id: this.list.length, name: item };
    this.list.push(newTask);
    console.log(this.list);
  }

  // Delete a task by id
  delTask(id: number): void {
    this.list = this.list.filter(item => item.id !== id);
  }
}
