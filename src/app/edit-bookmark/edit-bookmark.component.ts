import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { BookmarksComponent } from '../bookmarks/bookmarks.component';
import {Bookmark} from '../shared/bookmark.model';
import {BookmarkService} from '../shared/bookmark.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {

  bookmark: Bookmark | undefined;


  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
     this.route.params.subscribe((params ) => {
      const bookmarkId = params[':id']
      this.bookmark = this.bookmarkService.getBookmark(bookmarkId!)

    })
  }

  onFormSubmit(form: NgForm) {
    console.log(form.value);
  }

}
