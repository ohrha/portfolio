import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {

  constructor() { }

  backgroundImageShow=false;
  backgroundImageHide=false;
  backgroundImageShow2 = false;
  backgroundImageShow3 = false;
  backgroundImageShow4 = false;
  backgroundImageShow5 = false;
  backgroundImageShow6 = false;
  backgroundImageShow7 = false;
  backgroundImageShow2Hide=false;
  index:number = 0;

  ngOnInit() {
  }
   changePhoto(){

    if(this.index==0){

      this.backgroundImageShow=true;
      this.backgroundImageShow2 = false;
      this.index=1;

    }
    else if(this.index == 1){

      this.backgroundImageShow2 = true;
      this.backgroundImageShow = false;
      this.index=2

    }
       else if(this.index == 2){

      this.backgroundImageShow3 = true;
      this.backgroundImageShow2 = false;
      this.index=3

    }
       else if(this.index == 3){

      this.backgroundImageShow4 = true;
      this.backgroundImageShow3 = false;
      this.index=4

    }
       else if(this.index == 4){

      this.backgroundImageShow5 = true;
      this.backgroundImageShow4 = false;
      this.index=5

    }
       else if(this.index == 5){

      this.backgroundImageShow6 = true;
      this.backgroundImageShow5 = false;
      this.index=6

    }
       else if(this.index == 6){

      this.backgroundImageShow7 = true;
      this.backgroundImageShow6 = false;
      this.index=7

    }
      else if(this.index == 7){
      this.backgroundImageShow7 = false;
      this.index=0

    }
         

  }

}
