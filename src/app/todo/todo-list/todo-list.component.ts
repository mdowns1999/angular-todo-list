import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  TodoList: Todo[] = [];

  constructor(private todoService: TodoService){
    this.TodoList = todoService.getTodoList();
  }


  ngOnInit(): void {
    
  }
}
