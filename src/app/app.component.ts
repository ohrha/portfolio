import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { SwPush } from '@angular/service-worker';
import { ConfigService } from './services/config.service';
import { PushService } from './services/push.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private swupdate: SwUpdate, private swPush: SwPush,private configservice:ConfigService,
              private pushservice: PushService){
 
  }
  title = 'app';
  VAPID_PUBLIC_KEY:string;
  

  ngOnInit(){
    this.VAPID_PUBLIC_KEY = this.configservice.get('VAPID_PUBLIC_KEY')
    console.log(this.VAPID_PUBLIC_KEY)
  // console.log(navigator.serviceWorker.controller.state)
  if(!navigator.serviceWorker.controller){

            if(!localStorage.getItem('pushsubscription')){

                  this.swPush.requestSubscription({
                      serverPublicKey: this.VAPID_PUBLIC_KEY
                  }).then(pushSubscription=>{

                    localStorage.setItem('pushsubscription',JSON.stringify(pushSubscription));
                    this.pushservice.sendServiceWorkerNotActiveNotification(pushSubscription).subscribe(data=>{

                      console.log(data);

                    })
                })
            }else{
              let pushSubscription = JSON.parse(localStorage.getItem('pushsubscription'));
                    this.pushservice.sendServiceWorkerNotActiveNotification(pushSubscription).subscribe(data=>{

                      console.log(data);

                    })
            }

  }
    else{

            if(!localStorage.getItem('pushsubscription')){

                  this.swPush.requestSubscription({
                      serverPublicKey: this.VAPID_PUBLIC_KEY
                  }).then(pushSubscription=>{

                    localStorage.setItem('pushsubscription',JSON.stringify(pushSubscription));
                    this.pushservice.sendServiceWorkerActiveNotification(pushSubscription).subscribe(data=>{

                      console.log(data);

                    })
                })
            }else{
              let pushSubscription = JSON.parse(localStorage.getItem('pushsubscription'));
                    this.pushservice.sendServiceWorkerActiveNotification(pushSubscription).subscribe(data=>{

                      console.log(data);

                    })
            }
         }
  // if(!localStorage.getItem('pushsubscription')){


    // this.pushservice.subscribeToPush.subscribe(data=>{



    // })
     
   //}
    //this.subscribeToPush();
 //this.swupdate.
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

      .then(pushSubscription => {
        console.log("hello")
        // Passing subscription object to our backend
        localStorage.setItem('pushsubscriptiontest',"test");
        localStorage.setItem('pushsubscription',JSON.stringify(pushSubscription));
    
  })

}
}