import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskList } from '../modules/home/model/task-list';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  public getTaskList(): Observable<TaskList> {
    return this.http.get<TaskList>(this.url + '/tasks').pipe(
      (res) => res,
      (error) => error
    );
  }
}
