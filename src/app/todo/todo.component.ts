import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[]

  constructor(private todoService: TodoService) { 
    this.todos = []
  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
  }

  togggleCompleted(todo: Todo){
    this.todoService.updateTodo(todo.id, {compledet: !todo.compledet})
  }

}
