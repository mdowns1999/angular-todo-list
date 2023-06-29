import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CompletedComponent } from './completed/completed.component';

const routes: Routes = [
  {path: ' ', redirectTo: '/todoList', pathMatch: 'full' },
  {path: 'todoList', component: TodoComponent},
  {path: 'completedItems', component: CompletedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
