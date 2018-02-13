import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SwPush } from '@angular/service-worker';
import { ConfigService } from '../services/config.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class PushService {

  constructor(private http: Http, private swPush: SwPush, private configService: ConfigService) { }

  VAPID_PUBLIC_KEY = this.configService.get('VAPID_PUBLIC_KEY')

  addNotification(notification) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.post('/notification', notification, { headers: headers })
      .map(res => res.json())



  }

  retrieveNotification() {

    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get('routes/notification', { headers: headers })
      .map(res => res.json())


  }

  sendServiceWorkerActiveNotification(subscription) {

    let body = {
      subscription: subscription
    }
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post('routes/serviceworkeractive', body, { headers: headers })
      .map(res => res.json());

  }
  sendServiceWorkerNotActiveNotification(subscription) {

    let body = {
      subscription: subscription
    }
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post('routes/serviceworkernotactive', body, { headers: headers })
      .map(res => res.json());

  }

  subscribeToPush() {

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })

      .then(pushSubscription => {
        console.log("hello")
        // Passing subscription object to our backend
        localStorage.setItem('pushsubscriptiontest', "test");
        localStorage.setItem('pushsubscription', JSON.stringify(pushSubscription));
        return pushSubscription;
      })

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
    return this.http.post('routes/webpush', body, { headers: headers })



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
