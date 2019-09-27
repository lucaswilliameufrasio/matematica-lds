import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeTDAHPage } from '../home_tdah/home_tdah';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-abertura',
  templateUrl: 'abertura.html',
})
export class AberturaPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public nav: NavController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AberturaPage');
  }

  goToTDAH() {
    this.nav.setRoot(HomeTDAHPage);
  }

  goToCompeticao() {
    
    this.nav.setRoot(LoginPage);
  }

}
