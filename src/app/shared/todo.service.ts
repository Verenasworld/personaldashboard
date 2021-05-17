import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
   
  ]
  constructor() {
   this.loadState();
   }
  
  getTodos(){
    return this.todos;
  }


  getTodo(id:string){
    return this.todos.find(t => t.id === id);
    //find the todo whish has the id , compare it of the value is equal to the id we passed in 
  }


  addTodo(todo: Todo){
    this.todos.push(todo);
    this.saveState();
    
}
updateTodo(id: string, updatedTodoFields: Partial<Todo> ){
  const todo = this.getTodo(id);
  Object.assign(todo, updatedTodoFields)
  //Partial<Note> is an Utility Types,  TypeScript bietet verschiedene Dienstprogrammtypen, um allgemeine Typtransformationen zu ermöglichen. Konstruiert einen Typ mit allen Eigenschaften von Type auf optional. Dieses Dienstprogramm gibt einen Typ zurück, der alle Teilmengen eines bestimmten Typs darstellt.
  this.saveState();
}
deleteTodo(id:string){
  const todoIndex = this.todos.findIndex(t => t.id === id )
  if(todoIndex == -1) return
  this.todos.splice(todoIndex, 1);
  this.saveState();
 }


 //loadState
 //saceState

 saveState(){
   localStorage.setItem('todo', JSON.stringify(this.todos));
 }

 loadState(){
  try{
    const todoInStorage = JSON.parse(localStorage.getItem('todo')!);
    this.todos.length = 0;
    this.todos.push(...todoInStorage)
  }
  catch(e){
    console.log('There was an error retrieving the todos from localStorage');
    console.log(e);
  }
 

}

}
