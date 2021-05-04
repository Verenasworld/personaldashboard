import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = []


  constructor() { }


  getTodos(){
    return this.todos
  }


  getTodo(id:string){
    return this.todos.find(t => t.id === id)
    //find the todo whish has the id , compare it of the value is equal to the id we passed in 
  }


  addTodo(todo: Todo){
    this.todos.push(todo)
}
updateTodo(id: string, updatedTodoFields: Partial<Todo> ){
  const todo = this.getTodo(id)
  Object.assign(todo, updatedTodoFields)
  //Partial<Note> is an Utility Types,  TypeScript bietet verschiedene Dienstprogrammtypen, um allgemeine Typtransformationen zu ermöglichen. Konstruiert einen Typ mit allen Eigenschaften von Type auf optional. Dieses Dienstprogramm gibt einen Typ zurück, der alle Teilmengen eines bestimmten Typs darstellt.
}
deleteNote(id:string){
  const todoIndex = this.todos.findIndex(t => t.id === id )
  if(todoIndex == -1) return
  this.todos.splice(todoIndex, 1)
 }


}
