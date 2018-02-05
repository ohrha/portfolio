import { Component, OnInit } from '@angular/core';
import {HostListener } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

fadeOutMusic:boolean = false;
fadeOutMusicFirst:boolean = false;

  @HostListener('window:scroll', ['$event'])
  onResize(event) {
console.log("i scrolled.")
console.log(document.getElementById('fader').offsetTop)

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

  ngOnInit() {
  }

}
