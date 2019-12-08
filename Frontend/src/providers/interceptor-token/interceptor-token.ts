import { AlertController } from 'ionic-angular';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { App } from 'ionic-angular';
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';
import { AberturaPage } from '../../pages/abertura/abertura';

/*
  Generated class for the InterceptorTokenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class InterceptorTokenProvider implements HttpInterceptor {

  constructor(public app: App, private storage: Storage, private alertCtrl: AlertController) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let promise = this.storage.get('access_token');
    return Observable.fromPromise(promise)
      .mergeMap(token => {
        console.log("token server::", token);
        let clonedReq = this.addToken(request, token);
        return next.handle(clonedReq).pipe(
          catchError(error => {
            let msg = "Ops! Houve um erro de conexão, por favor verifique sua conexão e tente novamente!";
            let alert = this.alertCtrl.create({
              title: "Erro de conexão",
              message: msg,
              buttons: ['OK']
            });
            alert.present();
            this.app.getActiveNav().setRoot(AberturaPage);
            return _throw(error);
          })
        );
      });
  }

  private addToken(request: HttpRequest<any>, token: any) {
    if (token) {
      let clone: HttpRequest<any>;
      clone = request.clone({
        setHeaders: {
          Accept: `application/json`,
          'Content-type': `application/json; charset=utf-8`,
          Authorization: `Bearer ${token}`
        }
      });
      return clone;
    }
    return request;
  }
}
