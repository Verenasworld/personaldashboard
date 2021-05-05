import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookmarkService } from '../shared/bookmark.service';


@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {
  showValidationErrors: boolean = false

  constructor(private bookmarkService: BookmarkService, private router: Router) { }

  ngOnInit(): void {
  }
  onFormSubmit(form: NgForm){
    if(form.invalid) return this.showValidationErrors = true
    //create an todo object and use the todo service to add the todo
    this.router.navigateByUrl("/bookmarks")
    return
  }

}
