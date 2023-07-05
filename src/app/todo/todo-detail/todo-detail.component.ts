import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-model';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo: Todo;
  id: string;

  constructor(private todoService: TodoService, 
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.todo = this.todoService.getTodoItem(this.id);
      }
    )
  }

  onDelete(){
    this.todoService.deleteTodoItem(this.todo);
    this.router.navigateByUrl('/todoList');
  }
}
