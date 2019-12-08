import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalculadoraPage } from '../calculadora/calculadora';
import { RankingService } from '../../services/ranking.service';
import { RankingPage } from '../ranking/ranking';
import { LoadingService } from '../../services/loading.service';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-partida',
  templateUrl: 'partida.html',
})
export class PartidaPage {

  Selected_Operation: any;
  matches: Array<any> = [];

  constructor(private loading: LoadingService, public navCtrl: NavController, public navParams: NavParams, private rankingService: RankingService) {
    this.Selected_Operation = this.navParams.data;
  }

  ionViewDidLoad() {
    this.listMyMatches();
  }

  goToCalculator() {
    this.navCtrl.push(CalculadoraPage, { Selected_Operation: this.Selected_Operation })
  }

  goToRaking() {
    this.navCtrl.push(RankingPage, { Selected_Operation: this.Selected_Operation })
  }

  listMyMatches() {
    this.loading.presentWithGif()
    this.rankingService.listMyMatches(this.Selected_Operation.id)
      .subscribe(res => {
        this.matches = res;
        if (this.matches.status === 'token_expired'){
          this.navCtrl.setRoot(LoginPage);
        }
        console.log(res);
      })
    this.loading.dismiss();
  }

}
