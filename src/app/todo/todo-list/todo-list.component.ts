import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  TodoList: Todo[] = [];
  subscription: Subscription;

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.TodoList = this.todoService.getTodoList();

    this.subscription = this.todoService.todoListChangedEvent.subscribe(
      (todoList: Todo[]) => {
        this.TodoList = todoList;
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
