import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notification$: Subject<string> = new Subject()

  constructor() { }

  show(text:string){
    this.notification$.next(text)
  }
}
