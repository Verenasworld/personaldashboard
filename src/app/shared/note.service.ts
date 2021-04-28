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

  // get Note return true when the (obkekt-id) n.id quals the id id passed into this    method
      //id matches the id passed in 
      // gibt true zurück , wenn die objekt id an diese Methode überebene ID - ID qualifiziert ? gleich ist ? 
      //one line error function (shorthand) 

  getNote(id: string) {
     return this.notes.find(n => n.id === id)
  }

  addNote(note: Note){
    this.notes.push(note)
  }
}
