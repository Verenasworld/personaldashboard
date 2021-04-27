import { trigger } from '@angular/animations';
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim',[

    ])
  ]
})


export class AppComponent {


  theDate = new Date();


  //observable
  prepareRoute(outlet: RouterOutlet){
    if (outlet.isActivated) 
    return outlet.activatedRoute.snapshot.url
  }

}
