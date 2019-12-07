import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilService } from '../../services/perfil.service';
import { RankingService } from '../../services/ranking.service';
import { EditarPerfilPage } from '../editar-perfil/editar-perfil';



@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  perfil: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private perfilService: PerfilService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
  
  ionViewWillEnter(){
    this.getPerfil()
  }

  getPerfil() {
    this.perfilService.perfil()
      .subscribe(res => {
        this.perfil = res
        console.log(this.perfil);
      })
  }

  goToEditar(){
    this.navCtrl.push(EditarPerfilPage)
  }

}
