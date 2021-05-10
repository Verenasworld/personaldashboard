import {Component, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { BookmarksComponent } from '../bookmarks/bookmarks.component';
import {Bookmark} from '../shared/bookmark.model';
import {BookmarkService} from '../shared/bookmark.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {


  bookmark: Bookmark | undefined;


  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService) {
  }

  ngOnInit(): void {
     this.route.paramMap.subscribe((params: ParamMap ) => {
      const bookmarkId = params.get('id');
      this.bookmark = this.bookmarkService.getBookmark(bookmarkId!);

    })
  }

  onFormSubmit(form: NgForm) {
    const{ name, url } = form.value;
    this.bookmarkService.updateBookmark(this.bookmark!.id , {
      name,
      url: new URL(url)
      // we need a new URL , url  object to update new url after edit the url
    });
    this.router.navigateByUrl("/bookmarks")
    this.notificationService.show('Link is updated')
  }

   delete(){
     this.bookmarkService.deleteBookmark(this.bookmark!.id);
     this.router.navigate(['../'], {relativeTo: this.route})
   }

}
