import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilService } from '../../services/perfil.service';



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
    this.getPerfil()
  }

  getPerfil(){
    this.perfilService.perfil()
    .subscribe(res => {
      this.perfil = res
      console.log(this.perfil);
    })
  }

}
