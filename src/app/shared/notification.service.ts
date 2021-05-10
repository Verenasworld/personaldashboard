import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotifacationData } from './notification-data.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

 private notification$: Subject<NotifacationData> = new Subject();

 get notifivcation(){
   return this.notification$.asObservable()
 }

  constructor() { }

  show(text:string, duration = 5000){
    this.notification$.next({text, duration});
  }

// create service , 
// we create a Subject - $ -  Convention for observabels,
// when ever the show method is executed we will sending 
//the notification text to all subscriber of this oject 

}
