import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private swupdate: SwUpdate){

  }
  title = 'app';

  ngOnInit(){

    if(this.swupdate.isEnabled){

      if(this.swupdate.available.subscribe(()=>{

        if(confirm("New Version Available. Load New Version")){

          window.location.reload();
        }

      })
    }
}

}
