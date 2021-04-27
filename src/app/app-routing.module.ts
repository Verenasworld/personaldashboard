import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ChatComponent } from './chat/chat.component';
import { NotesComponent } from './notes/notes.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: 'bookmarks', component: BookmarksComponent, data:{ tabNum: 0}},
  {path: 'notes', component: NotesComponent, data:{ tabNum: 2}},
  {path: 'todo', component: TodoComponent, data:{ tabNum: 1}},
  {path: 'chat', component: ChatComponent, data:{ tabNum: 3}},
  {path: 'notes/add', component: AddNoteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
