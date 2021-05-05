import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmarks: Bookmark[] = [
    new Bookmark('updatet','https://www.wikipedia.org/'),
    new Bookmark('test','https://www.google.com/'),
    new Bookmark('test','https://www.youtube.com/'),
    new Bookmark('githubkeksi','https://github.com/Verenasworld'),
    new Bookmark('gmail','https://mail.google.com/mail/u/0/#inbox'),
    new Bookmark('gmail','https://www.pinterest.at/'),
    new Bookmark('updatet','https://www.wikipedia.org/'),
    new Bookmark('test','https://www.google.com/'),
    new Bookmark('test','https://www.youtube.com/'),
    new Bookmark('githubkeksi','https://github.com/Verenasworld'),
    new Bookmark('gmail','https://mail.google.com/mail/u/0/#inbox'),
    new Bookmark('gmail','https://www.pinterest.at/'),
   
  ]

  constructor() {

   }

   getBookmarks(){
     return this.bookmarks
   }

   getBookmark( id: string){
     return this.bookmarks.find(b => b.id === id)
   }

   addBookmark(bookmark: Bookmark){
   this.bookmarks.push(bookmark)
   }


   updateBookmark(id: string, updatedField: Partial<Bookmark>){
    const bookmark = this.getBookmark(id)
    Object.assign(bookmark, updatedField)
   }

   deleteBookmark(id: string){
    const bookmarkIndex = this.bookmarks.findIndex(b => b.id === id)
    if(bookmarkIndex == -1) return
    this.bookmarks.splice(bookmarkIndex, 1)
   }
}
