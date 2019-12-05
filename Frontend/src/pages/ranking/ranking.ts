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

  ranking: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private rankingService: RankingService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }

  // getRanking(){
  //   this.rankingService.ranking()
  // }

}
