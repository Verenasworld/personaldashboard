import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[]

  constructor() { }

  getNotes(){
    return this.notes
  }

  getNote(id: string) {
    this.notes.find(n => {
      return n.id === id
    })
  }
}
