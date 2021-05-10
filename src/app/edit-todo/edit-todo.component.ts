import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import {Todo} from '../shared/todo.model';
import {TodoService} from '../shared/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  todo: Todo | undefined;

  showValidationErrors: boolean = false;

  constructor(private todoService: TodoService,
              private router: Router,
              private route: ActivatedRoute,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoId = paramMap.get('id');
      this.todo = this.todoService.getTodo(todoId!)


    })
  }


  onFormSubmit(form: NgForm) {
    if (form.invalid) return this.showValidationErrors = true;
    
    this.todoService.updateTodo(this.todo!.id, form.value);
    console.log('todoedit updated?:', form.value, this.todo!.id);
    //create an todo object and use the todo service to add the todo
    this.router.navigateByUrl("/todo");
    this.notificationService.show('Todo is updated!');
    return
  }

}
