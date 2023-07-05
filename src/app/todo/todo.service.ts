import { Injectable } from '@angular/core';
import { Todo } from './todo-model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //TodoList: Todo[] = [];
  TodoList: Todo[] = [
    new Todo ( '1','Doctor Visit','Health','Visit to check ears.',false),
    new Todo ( '2','Grocery Shopping','Food','By food for the week.',false)
  ];

  constructor() { }

  getTodoList(){
    return this.TodoList.slice();
  }

  getTodoItem(id: string): Todo{
    return this.TodoList.find((listItem)=> listItem.id === id);
  }

  updateTodoitem(originalTodoItem: Todo, newtodoItem: Todo){

  }
  
  deleteTodoItem(todoItem: Todo){
    console.log('Deleted')
  }
}
