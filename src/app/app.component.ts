import { style, transition, trigger , animate , query ,group } from '@angular/animations';
import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim',[
        transition(':increment', [
          style({
            position: 'relative',
            overflow: 'hidden'
          }),

          query(':enter, :leave' ,[
            style({

              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            })

          ],{optional: true}),

    
         group([
          query(':leave',[
            animate('400ms ease-in', style({
              opacity: 0,
              transform: 'translateX(80px)',
            }))
          ], {optional: true}),
         
          query(':enter', [
            style({
              opacity:0,
              transform: 'translateX(-80px)'
            }),
            animate('400ms 120ms ease-out', style({
              opacity: 1 ,
              transform: 'translateX(0)'
            
            }))
          ], { optional: true })
         ])
         
        ]),
        transition(':decrement', [
          style({
            position: 'relative',
            overflow: 'hidden'
          }),

          query(':enter, :leave' ,[
            style({

              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            })

          ],{optional: true}),

    
         group([
          query(':leave',[
            animate('400ms ease-in', style({
              opacity: 0,
              transform: 'translateX(-80px)',
            }))
          ], {optional: true}),
         
          query(':enter', [
            style({
              opacity:0,
              transform: 'translateX(80px)'
            }),
            animate('400ms 120ms ease-out', style({
              opacity: 1 ,
              transform: 'translateX(0)'
            
            }))
          ], { optional: true })
         ])
         
        ])
    ])
  ]
})


export class AppComponent implements OnInit {


  theDate = new Date();


  //observable
  prepareRoute(outlet: RouterOutlet){
    if (outlet.isActivated) {}
    return outlet.activatedRouteData['tabNum']
  }

  ngOnInit(){
    setInterval(()=>{
       this.theDate = new Date()
    },1000)

  }
  
}
