import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
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

  /**
   * addItemFromEvent
   */
  public addItemFromEvent(event: string) {
    const newItem: TaskList = { task: event, checked: false };
    this.taskList.push(newItem);
  }
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
    this.taskList = JSON.parse(localStorage.getItem('lista') || '[]');
  }
  ngDoCheck() {
    this.taskList.sort((first, last) => {
      const res = Number(first.checked) - Number(last.checked);
      console.log(first);
      console.log(last);
      console.log(res);
      console.log('===================================');

      return res;
    });
    this.updateLocalStorage();
  }

  /**
   * updateLocalStorage
   */
  public updateLocalStorage() {
    localStorage.setItem('lista', JSON.stringify(this.taskList || []));
  }
}
