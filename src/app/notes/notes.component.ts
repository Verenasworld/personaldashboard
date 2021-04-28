import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

notes: Note[]


  constructor() { }

  ngOnInit(): void {
  }

}
