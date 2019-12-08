import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilService } from '../../services/perfil.service';
import { RankingService } from '../../services/ranking.service';
import { EditarPerfilPage } from '../editar-perfil/editar-perfil';
import { LoadingService } from '../../services/loading.service';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  perfil: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private perfilService: PerfilService, private loading: LoadingService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  ionViewWillEnter(){
    this.getPerfil()
  }

  getPerfil() {
    this.loading.presentWithGif()
    this.perfilService.perfil()
      .subscribe(res => {
        this.perfil = res
        if (this.perfil.status === 'token_expired') {
          this.navCtrl.setRoot(LoginPage);
        }
      })
    this.loading.dismiss()
  }

  goToEditar(){
    this.navCtrl.push(EditarPerfilPage)
  }

}
