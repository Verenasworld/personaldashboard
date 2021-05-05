import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[]

  constructor(private todoService: TodoService, private router:Router) { 
    this.todos = []
  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
  }

  togggleCompleted(todo: Todo){
    this.todoService.updateTodo(todo.id, {compledet: !todo.compledet})
  }

  onEditClick(todo: Todo){
  this.router.navigate(["/todo" , todo.id])
  }

  onDeleteClick(todo: Todo){
    this.todoService.deleteTodo(todo.id)
  }

  // i will push it in the master but its no working 
}
