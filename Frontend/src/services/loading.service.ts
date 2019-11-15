import { Injectable } from '@angular/core';
import { Loading, LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingService {
    loading: Loading;
    constructor(public loadingCtrl: LoadingController) {
    }

    presentWithGif() {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `
          <div>
            <img width="80" src="assets/loader2.gif" />
          </div>`
        });
        
        return this.loading.present();
    }

    dismiss() {
        return new Promise((resolve, reject) => {
            if (this.loading) {
                return this.loading.dismiss(resolve(true)).catch(error => {
                    console.log('loading error: ', error);
                });
            } else {
                resolve(true);
            }
        });

    }
}

