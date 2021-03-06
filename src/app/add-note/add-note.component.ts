import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  showValidationErrors: boolean = false

  constructor(
    private noteService: NoteService, 
    private router: Router,
    private notificationService: NotificationService) {
   
   }
  
  ngOnInit(): void {
  }

  
  onFormSubmit( form: NgForm){
    console.log(form)
  
    if(form.invalid) return this.showValidationErrors = true
    
    
    //create new note object and pass in title & content 
    const note = new Note(form.value.title, form.value.content)
    this.noteService.addNote(note)
    this.notificationService.show('Created New Note!')

    //navigate the userd back to the notes view when create new Notes
    this.router.navigateByUrl("/notes")
    return
  }

  }
