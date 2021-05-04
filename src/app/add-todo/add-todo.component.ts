import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  showValidationErrors: boolean = false

  constructor( private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }


  onFormSubmit(form: NgForm){
    const todo = new Todo(form.value.text)
    this.todoService.addTodo(todo)
    //create an todo object and use the todo service to add the todo
    this.router.navigateByUrl("/todo")
    return
  }
}
