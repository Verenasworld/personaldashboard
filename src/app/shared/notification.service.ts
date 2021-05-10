import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

 private notification$: Subject<string> = new Subject();

 get notifivcation(){
   return this.notification$.asObservable()
 }

  constructor() { }

  show(text:string){
    this.notification$.next(text);
  }

// create service , 
// we create a Subject - $ -  Convention for observabels,
// when ever the show method is executed we will sending 
//the notification text to all subscriber of this oject 

}
