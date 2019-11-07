import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()
export class ToastService {

    /*
       Classe CadastroService contem a função presentToast().
       Esse serviso precisa ser importado no arquivo "TS" da pagina que será utilizado.
    */

    constructor(public toastCtrl: ToastController) { }

    //Função controladora de exbição de mensagens de avisos para o usuário
    presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });
        toast.present();
    }
}
