import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Headers} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class PushService {

  constructor(private http:Http) { }

  addNotification(notification){
    let headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post('/notification',notification,{headers:headers})
    .map(res=> res.json())



  }

  retrieveNotification(){

    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get('routes/notification',{headers:headers})
    .map(res=>res.json())
    

  }

  addSubscriber(subscription) {

    const url = `routes/webpush`;
    console.log('[Push Service] Adding subscriber')
    console.log(subscription)
    



    let body = {
      action: 'subscribe',
      subscription: subscription
    }
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('routes/webpush',body,{headers:headers})
    
   

  }
    private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = `${error.statusText || 'Network error'}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
  
}
