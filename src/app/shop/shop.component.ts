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
      console.log(rect.top)
      console.log(rect2.top)
      if(rect.top<140){
  this.fadeOutMusicFirst = true;

}
if(rect.top>140){
  this.fadeOutMusicFirst = false;
}
     if(rect2.top<150){
  
this.fadeOutMusic = true;
}
if(rect2.top>150){
  this.fadeOutMusic = false;
}

    })

    
  }
  ngOnInit() {
   
    
  }

}
