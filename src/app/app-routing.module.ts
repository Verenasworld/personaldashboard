import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { CalenderComponent } from './calender/calender.component';
import { ChatComponent } from './chat/chat.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ManageBookmarksComponent } from './manage-bookmarks/manage-bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: '', component: BookmarksComponent},
  {path: 'bookmarks', component: BookmarksComponent, data:{ tabNum: 0}},
  {path: 'bookmarks/add', component: AddBookmarkComponent},
  {path: 'bookmarks/manage', component: ManageBookmarksComponent},
  {path: 'todo', component: TodoComponent, data:{ tabNum: 1}},
  {path: 'todo/add', component: AddTodoComponent},
  {path: 'todo/:id', component: EditTodoComponent},
  {path: 'notes', component: NotesComponent, data:{ tabNum: 2}},
  {path: 'notes/add', component: AddNoteComponent},
  {path: 'notes/:id', component: EditNoteComponent},
  {path: 'chat', component: ChatComponent, data:{ tabNum: 3}},
  {path: 'calender', component: CalenderComponent, data:{ tabNum: 4}},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
