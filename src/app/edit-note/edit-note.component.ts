import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute , ParamMap, Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note!: Note;

  constructor( private route: ActivatedRoute,private router: Router, private noteService: NoteService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id')
      console.log(idParam + 'hier')
      
     

    })
  }
  onFormSubmit(form: NgForm) {
    this.noteService.updateNote(this.note.id, form.value)
    this.router.navigateByUrl("/notes")
  }


}
