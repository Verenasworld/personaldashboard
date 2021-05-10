import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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

  notification!: any;
  timeout: any;

  constructor( private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notifivcation.subscribe((notification : string)=>{
      this.notification = notification;

      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => {

        this.notification = null
         
      },2000)
    })
  }

}
