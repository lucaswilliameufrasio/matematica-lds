import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CalculadoraPage } from '../calculadora/calculadora';
import { MenuPage } from '../menu/menu';
import { LoginPage } from '../login/login';
import { AberturaPage } from '../abertura/abertura';
import { CalculadoraTdahPage } from '../calculadora-tdah/calculadora-tdah';
@Component({
  selector: 'page-home_tdah',
  templateUrl: 'home_tdah.html'
})
export class HomeTDAHPage {

  pushCalculator: any;
  pushMenu: any;
  params_addition: Object;
  params_subtraction: Object;
  params_multiplication: Object;
  params_Division: Object;
  params_Exponentiation: Object;

  constructor(
    public navCtrl: NavController,
    private socialSharing: SocialSharing,
    public nav: NavController,
  ) {
    this.pushCalculator = CalculadoraTdahPage;
    this.pushMenu = MenuPage;
    this.params_addition = { id: 1 };
    this.params_subtraction = { id: 2 };
    this.params_multiplication = { id: 3 };
    this.params_Division = { id: 4 };
    this.params_Exponentiation = { id: 5 };
  }

  goToLogin() {
    this.nav.push(LoginPage);
  }

  goToAbertura(){
    this.nav.setRoot(AberturaPage);
  }
}
