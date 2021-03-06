import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { toDoModel } from '../../organise/model/todo.model';
import { TodoService } from '../../organise/service/todo.service';


@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.scss']
})
export class ToDoPageComponent implements OnInit {
  todos: toDoModel[] = [];
  sub: Subscription | undefined;

  constructor(
    public todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.sub = this.todoService
    .getUserToDos()
    .subscribe(todos => (this.todos = todos));
  }

}
