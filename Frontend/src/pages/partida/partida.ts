import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalculadoraPage } from '../calculadora/calculadora';
import { RankingService } from '../../services/ranking.service';
import { RankingPage } from '../ranking/ranking';

@IonicPage()
@Component({
  selector: 'page-partida',
  templateUrl: 'partida.html',
})
export class PartidaPage {

  Selected_Operation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Selected_Operation = this.navParams.data;
    console.log("id operação: ", this.Selected_Operation.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartidaPage');
  }

  goToCalculator(){
    this.navCtrl.push(CalculadoraPage, {Selected_Operation: this.Selected_Operation})
  }

  goToRaking(){
    this.navCtrl.push(RankingPage, {Selected_Operation: this.Selected_Operation})
  }

}
