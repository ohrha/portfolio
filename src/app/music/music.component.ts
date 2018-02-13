import { Component, OnInit } from '@angular/core';
import { HostListener, ViewChild } from '@angular/core';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  constructor() { }

  fadeOutMusic: boolean = false;
  fadeOutMusicFirst: boolean = false;
  fadeOutMusicThird: boolean = false;
  descriptionReveal: boolean = false;
  @ViewChild('viewchild') div;
  ngAfterViewInit() {

    console.log(this.div.nativeElement);
    this.div.nativeElement.addEventListener('scroll', (event) => {

      console.log("iscrholloed")
      let rect = document.getElementById('fader').getBoundingClientRect();
      let rect2 = document.getElementById('fader2').getBoundingClientRect();
      let rect3 = document.getElementById('fader3').getBoundingClientRect();
      let rect4 = document.getElementById('fader4').getBoundingClientRect();

      console.log(rect.top)
      console.log(rect2.top)
      console.log(rect3.top)
      console.log(rect4.top);
      if (rect.top < 150) {
        this.fadeOutMusicFirst = true;

      }
      if (rect.top > 120) {
        this.fadeOutMusicFirst = false;
      }
      if (rect2.top < 120) {

        this.fadeOutMusic = true;
      }
      if (rect2.top > 150) {
        this.fadeOutMusic = false;
      }
      if (rect3.top < 140) {

        this.fadeOutMusicThird = true;
      }
      if (rect3.top > 150) {
        this.fadeOutMusicThird = false;
      }

      if (rect4.top > 250) {

        this.descriptionReveal = false;
      }
      if (rect4.top < 250) {
        this.descriptionReveal = true;
      }
    })


  }

  ngOnInit() {
  }


}
