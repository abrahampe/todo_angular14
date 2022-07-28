import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    {
      task: 'Minha task 1',
      checked: true,
    },
    {
      task: 'Minha task 2',
      checked: false,
    },
    {
      task: 'Minha task 3',
      checked: true,
    },
    {
      task: 'Minha task 4',
      checked: true,
    },
  ];

  public deleteItemTaskList(index: number) {
    this.taskList.splice(index, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      this.taskList = [];
    }
  }
  constructor() {
    // this.taskList = []
  }

  ngOnInit(): void {}
}
