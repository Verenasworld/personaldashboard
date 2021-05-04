import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  showValidationErrors: boolean = false

  constructor( private todoService: TodoService) { }

  ngOnInit(): void {
  }


  onFormSubmit(form: NgForm){
    console.log(form)
  }
}
