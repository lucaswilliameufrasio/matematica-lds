import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RankingService } from '../../services/ranking.service';

/**
 * Generated class for the RankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  ranking: Array<any> = [];
  Selected_Operation: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private rankingService: RankingService) {
    this.Selected_Operation = this.navParams.data.Selected_Operation;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
    this.getRanking()
  }

  getRanking(){
    this.rankingService.ranking(this.Selected_Operation.id)
    .subscribe(res => {
      this.ranking = res
      console.log("Ranking:::", res);
    });
  }
}
