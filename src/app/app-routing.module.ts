import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'todo', component: TodoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
