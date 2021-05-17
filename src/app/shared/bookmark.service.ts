import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService implements OnDestroy {
  bookmarks: Bookmark[] = [];

  storageListenSub: Subscription;

  constructor() {
      this.loadState();


    //@ts-ignore
    this.storageListenSub = fromEvent(window, 'storage').subscribe((event: StorageEvent) => {
    if (event.key === 'bookmark') 
    this.loadState();
    console.log(event.key);
     });
   }
  ngOnDestroy(): void {
    if (this.storageListenSub) this.storageListenSub.unsubscribe();
  }


   getBookmarks(){
     return this.bookmarks;
   }

   getBookmark( id:string){
     return this.bookmarks.find(b => b.id === id);
   }

   addBookmark(bookmark: Bookmark){
   this.bookmarks.push(bookmark);
   this.saveState();
   }


   updateBookmark(id: string, updatedField: Partial<Bookmark>){
    const bookmark = this.getBookmark(id)
    Object.assign(bookmark, updatedField)
    this.saveState();
   }

   deleteBookmark(id: string){
    const bookmarkIndex = this.bookmarks.findIndex(b => b.id === id)
    if(bookmarkIndex == -1) return
    this.bookmarks.splice(bookmarkIndex, 1);
    this.saveState();
   }

   saveState(){
    localStorage.setItem('bookmark', JSON.stringify(this.bookmarks));
   }

   loadState(){
    try{
      const bookmarkInStorage = JSON.parse(localStorage.getItem('bookmark')!, (key, value)=>{
        return value
      })

      this.bookmarks.length = 0;
      this.bookmarks.push(...bookmarkInStorage);

      // transform it that we see favicon , 
      // convert to a object 
    }
    catch(e){
      console.log('There was an error retrieving the bookmark from localStorage');
      console.log(e);
    }

   }
}
