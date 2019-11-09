import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { HomeTDAHPage } from '../home_tdah/home_tdah';
import { LoginPage } from '../login/login';
import { VerifyTokenService } from '../../services/verifyToken.service';
import { HomePage } from '../home/home';
import { LoadingService } from '../../services/loading.service';

@IonicPage()
@Component({
  selector: 'page-abertura',
  templateUrl: 'abertura.html',
})
export class AberturaPage {

  resMe: any;

  constructor(
    public navCtrl: NavController,
    public verifyTokenService: VerifyTokenService,
    public navParams: NavParams,
    public loadingService: LoadingService,
    public http: HttpClient,
    private storage: Storage,
    public nav: NavController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AberturaPage');
  }

  goToTDAH() {
    this.nav.setRoot(HomeTDAHPage);
  }

  /*  
      goToCompeticao()..
      Verifica se existe token, se existir envia uma requisição para a api,
      verifica se o token e valido se for redireciona para a tela das operações,
      se não redireciona para a tela de login. Se não houver token redireciona para a tela login.
  */
  goToCompeticao() {
    this.storage.get('access_token').then(val => {
      if (val != null) {
        this.loadingService.presentWithGif()
        this.verifyTokenService.verifyToken()
          .subscribe(res => {
            this.resMe = res
            if (this.resMe.success == false) {
              this.navCtrl.setRoot(LoginPage)
            } else {
              this.navCtrl.setRoot(HomePage)
            }
            this.loadingService.dismiss()
          })
      }
      else {
        this.navCtrl.setRoot(LoginPage)
      }
    }, err => {
      console.log("Erro no Storage : ", err)
    })
  }
}
