import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodoComponent } from './todo/todo.component';
import { ChatComponent } from './chat/chat.component';
import { BookmarkTitleComponent } from './bookmark-title/bookmark-title.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { CalenderComponent } from './calender/calender.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';



@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    NotesComponent,
    TodoComponent,
    ChatComponent,
    BookmarkTitleComponent,
    AddNoteComponent,
    NoteCardComponent,
    EditNoteComponent,
    TodoItemComponent,
    AddTodoComponent,
    CalenderComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
    

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
