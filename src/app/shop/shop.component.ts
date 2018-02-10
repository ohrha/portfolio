import { Component, OnInit } from '@angular/core';
import {HostListener,ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SwPush } from '@angular/service-worker';
import { ConfigService } from '../services/config.service';
import { PushService } from '../services/push.service'; 

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  private VAPID_PUBLIC_KEY: string;
fadeOutMusic:boolean = false;
fadeOutMusicFirst:boolean = false;
fadeOutMusicThird:boolean = false;
descriptionReveal:boolean = false;
  @ViewChild('viewchild') div; 

  @HostListener('window:scroll', ['$event'])
  onResize(event) {
console.log("i scrolled.")
console.log(document.getElementById('fader').scrollLeft)
//console.log(document.getElementById('fader').)

const doc = document.documentElement;
var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
console.log(left)
console.log(top)
if(top>120){
  this.fadeOutMusicFirst = true;

}
if(top<120){
  this.fadeOutMusicFirst = false;
}
if(top>227){

  this.fadeOutMusic =true;

}
if(top<227){

  this.fadeOutMusic = false;
}
  }

  constructor(private swPush:SwPush,private configService:ConfigService, private pushService:PushService, private serviceworker:ServiceWorkerModule) { }
  ngAfterViewInit(){

    console.log(this.div.nativeElement);
    this.div.nativeElement.addEventListener('scroll',(event)=>{

      console.log("iscrholloed")
      let rect=document.getElementById('fader').getBoundingClientRect();
      let rect2 =document.getElementById('fader2').getBoundingClientRect();
      let rect3 =document.getElementById('fader3').getBoundingClientRect();
            let rect4 =document.getElementById('fader4').getBoundingClientRect();

      console.log(rect.top)
      console.log(rect2.top)
      console.log(rect3.top)
      console.log(rect4.top);
      if(rect.top<150){
  this.fadeOutMusicFirst = true;

}
if(rect.top>160){
  this.fadeOutMusicFirst = false;
}
     if(rect2.top<160){
  
this.fadeOutMusic = true;
}
if(rect2.top>150){
  this.fadeOutMusic = false;
}
    if(rect3.top<160){
  
this.fadeOutMusicThird = true;
}
if(rect3.top>150){
  this.fadeOutMusicThird = false;
}

    if(rect4.top>250){
  
this.descriptionReveal = false;
}
if(rect4.top<250){
  this.descriptionReveal= true;
}
    })

    
  }
  ngOnInit() {

   this.pushService.retrieveNotification().subscribe(data=>{

    console.log(data)

   })

    console.log(this.serviceworker)
    console.log(this.configService.get('VAPID_PUBLIC_KEY'));
    console.log("HELLo")
    this.VAPID_PUBLIC_KEY = this.configService.get('VAPID_PUBLIC_KEY')
  }
  
subscribeToPush() {

console.log("clicked")
    // Requesting messaging service to subscribe current client (browser)
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(pushSubscription => {
        console.log("hello")
        // Passing subscription object to our backend
        localStorage.setItem('pushsubscriptiontest',"test");
        localStorage.setItem('pushsubscription',JSON.stringify(pushSubscription));
        this.pushService.addSubscriber(pushSubscription)
          .subscribe(

          res => {
            console.log('[App] Add subscriber request answer', res)

      
            });
          },
          err => {
            console.log('[App] Add subscriber request failed', err)
          }

          )
     
     

  }
}
