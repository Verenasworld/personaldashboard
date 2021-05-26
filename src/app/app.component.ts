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
         
        ]),

        transition('* => secondary', [
          style({
            position: 'relative',
            //overflow: 'hidden'
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
              transform: 'scale(0.5)',
            }))
          ], {optional: true}),
         
          query(':enter', [
            style({
              opacity:0,
              transform: 'scale(0.8)'
            }),
            animate('400ms 120ms ease-out', style({
              opacity: 1 ,
              transform: 'scale(1)'
            
            }))
          ], { optional: true })
         ])
         
        ]),
        transition('* => secondary', [
          style({
            position: 'relative',
            //overflow: 'hidden'
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
              transform: 'scale(1)',
            }))
          ], {optional: true}),
         
          query(':enter', [
            style({
              opacity:0,
              transform: 'scale(0.8)'
            }),
            animate('400ms 120ms ease-out', style({
              opacity: 1 ,
              transform: 'scale(0.5)'
            
            }))
          ], { optional: true })
         ])

        ])
    ]),

    trigger('bgAnim', [
      transition(':leave', [
        animate(2000, style({
          opacity: 0
        }))
      ])
    ]),

    trigger('fadeAnim', [
      transition(':enter', [
        style({ opacity: 0}),
        animate(550,style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate(550,style({
          opacity:0
        }))
      ])
    ])
  ]
})


export class AppComponent implements OnInit {
 


  theDate = new Date();
  background: string[] = [
    'https://images.unsplash.com/photo-1603234418621-56262863a43f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'
] 

  loadingBgImage: boolean = false;


  //observable
  prepareRoute(outlet: RouterOutlet){
    if (outlet.isActivated) {
      const tab =  outlet.activatedRouteData['tabNum'];
      if (!tab) return 'secondary';
      return tab;
    }
    

    //different animation when the route has no tabNum
  }

   async changeBgImage(){
     this.loadingBgImage = true;
   const result = await fetch('https://source.unsplash.com/1920x1080/?sky',{
      method: 'HEAD'
    })

    

    this.background.push(result.url);
  }

  onBgImageload(imgEvent: Event){
    const imgElement = imgEvent.target as HTMLImageElement;
    const src = imgElement.src;
    this.background = this.background.filter(b => b === src);
  

    this.loadingBgImage = false;
  }

  ngOnInit(){
    setInterval(()=>{
       this.theDate = new Date();
    },1000);

  }
  
}
//with .reverse setzen wit das neu geladene Bild in DOM unterhalb des erstens Array Inhaltes, durch laden die Bilder aber sie werden nicht angezeigt ums sie anzuzeigen -
// remove the old bgimg from background array  ( with animation ) 