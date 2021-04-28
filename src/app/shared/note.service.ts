import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {



  constructor(public notes: Note[]) {

   }

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

  updateNote(id: string, updatedFields: Partial<Note>){
    const note = this.getNote(id)
    Object.assign(note, updatedFields)
  }

  //Die Methode Object.assign() kopiert die Werte aller aufzählbaren, eigenen Eigenschaften von einem oder mehreren Quellobjekten in ein Zielobjekt. Es wird das Zielobjekt zurückgegeben.

deleteNote(id:string){
 const noteIndex = this.notes.findIndex(n => n.id === id )
 this.notes.splice(noteIndex, 1)
}
//find the index of notes 

}
