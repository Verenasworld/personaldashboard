import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NotifacationData } from '../shared/notification-data.model';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('notificationAnim', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(8px)'
        }),
        animate('350ms 225ms ease-out')
      ]),
      transition(':leave', [
        animate(225, style({
          opacity: 0,
          transform: 'scale(0.85)'
        }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {

  notification!: any[];
  timeout: any;

  constructor( private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notifivcation.subscribe((notification : NotifacationData)=>{
      this.notification = Array(notification);

      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => {

        this.notification = null!
         
      }, notification.duration)
    })
  }

  //set duration of set timeout dynamic 
}
