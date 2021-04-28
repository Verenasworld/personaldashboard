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
    NoteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
