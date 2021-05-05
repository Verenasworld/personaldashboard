import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../shared/bookmark.model';

@Component({
  selector: 'app-bookmark-title',
  templateUrl: './bookmark-title.component.html',
  styleUrls: ['./bookmark-title.component.scss']
})
export class BookmarkTitleComponent implements OnInit {

  @Input() bookmark!: Bookmark

  constructor() { }

  ngOnInit(): void {
  }

}
