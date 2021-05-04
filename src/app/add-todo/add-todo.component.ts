import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  showValidationErrors: boolean = false

  constructor() { }

  ngOnInit(): void {
  }


  onFormSubmit(form: NgForm){

  }
}
