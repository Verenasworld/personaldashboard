import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }
  onFormSubmit( form: NgForm){
    //create new note object and pass in title & content 
    const note = new Note(form.value.title, form.value.content)
    console.log(note)

    this.noteService.addNote(note)
  }
}
