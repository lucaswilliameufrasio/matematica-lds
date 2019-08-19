import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  
  Confirm_Advertising() {
  let PrivacyPolicy = this.alertCtrl.create({
    title: 'We care about your privacy and data security.',
    message: 'We keep this app free by using third party services.'+
    'We use ads in this app. this service'+ 
    '(including its partners) collects unique' +
    'identifiers and other personal data.  '+
     'You can change your choice at anytime in the app settings '+
     
     'Can we continue to use your data for these purposes'+
     'By agreeing, you are confirming that you are over the age of 16',

    buttons: [
      {
        text: 'No, Thank you',

        role: 'cancel',
        handler: () => {
          console.log('Cancel ');
        }
      },
      {
        text: 'Yes, I agree',
        handler: () => {
          console.log('Yes');
        }
      }
    ]
  });
  PrivacyPolicy.present();
}
}
