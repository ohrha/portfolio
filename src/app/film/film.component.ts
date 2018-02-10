import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  constructor() { }
playPromise:any;
  ngOnInit() {
  this.playPromise= document.querySelector('video').play();
  if(this.playPromise!== undefined){
  
 this. playPromise.then(function() {
    // Automatic playback started!
  }).catch(function(error) {
    // Automatic playback failed.
    // Show a UI element to let the user manually start playback.
  });

  }
  }

}
