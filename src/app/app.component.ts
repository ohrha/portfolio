import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { SwPush } from '@angular/service-worker';
import { ConfigService } from './services/config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private swupdate: SwUpdate, private swPush: SwPush,private configservice:ConfigService){
 
  }
  title = 'app';
  VAPID_PUBLIC_KEY:string;
  

  ngOnInit(){
    this.VAPID_PUBLIC_KEY = this.configservice.get('VAPID_PUBLIC_KEY')
    console.log(this.VAPID_PUBLIC_KEY)
    //this.subscribeToPush();

    if(this.swupdate.isEnabled){

      this.swupdate.available.subscribe(()=>{

        if(confirm("New Version Available. Load New Version")){

          window.location.reload();
        }

      })
    }
  
}
subscribeToPush(){

    // Requesting messaging service to subscribe to current browser//

    this.swPush.requestSubscription({

        serverPublicKey: this.VAPID_PUBLIC_KEY
        

    })

    .then(pushSubscription =>{

      console.log({update: 'notified',
                  body:"You've been notified"});



    })
  }

}
