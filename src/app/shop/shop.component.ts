import { Component, OnInit } from '@angular/core';
import {HostListener,ViewChild } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

fadeOutMusic:boolean = false;
fadeOutMusicFirst:boolean = false;
fadeOutMusicThird:boolean = false;
descriptionReveal:boolean = true;
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

  constructor() { }
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

    if(rect4.top>230){
  
//this.descriptionReveal = false;
}
if(rect4.top<140){
 // this.descriptionReveal= true;
}
    })

    
  }
  ngOnInit() {
   
    
  }

}
