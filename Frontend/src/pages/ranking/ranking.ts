import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RankingService } from '../../services/ranking.service';
import { LoadingService } from '../../services/loading.service';

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  ranking: Array<any> = [];

  Selected_Operation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private rankingService: RankingService, private loading: LoadingService) {
    this.Selected_Operation = this.navParams.data.Selected_Operation;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
    this.getRanking()
  }

  getRanking() {
    this.loading.presentWithGif()
    this.rankingService.ranking(this.Selected_Operation.id)
      .subscribe(res => {
        this.ranking = res.data
      });
    this.loading.dismiss()
  }

  public sortByKey(array, key) {
    return array.sort(function (a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 0 : 1));
    });
  }
}
