import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  constructor() { }
  backgroundImageShow=false;
  backgroundImageHide=false;
  backgroundImageShow2 = false;
  backgroundImageShow2Hide=false;
  index=0;

  ngOnInit() {
  }
  changePhoto(){
console.log("hello")
    if(this.index==0){

      this.backgroundImageShow=true;
      this.backgroundImageShow2 = false;
      this.index=1;
      console.log(this.backgroundImageShow);
      console.log(this.index)
      //this.backgroundImageHide = true;

    }
    else if(this.index == 1){

      this.backgroundImageShow2 = true;
      this.backgroundImageShow = false;
      this.index=0
      console.log(this.backgroundImageShow2);
      console.log(this.index)
    }

  }

}
