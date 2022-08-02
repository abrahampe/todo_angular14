import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent implements OnInit {
  @Output() public newTaskEvent = new EventEmitter();
  public newTaskItem: string = '';

  /**
   * sendTaskItemToList
   */
  public sendTaskItemToList() {
    console.log(this.newTaskItem);
    this.newTaskEvent.emit(this.newTaskItem);
  }
  constructor() {}

  ngOnInit(): void {}
}
