import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CalculadoraPage } from '../calculadora/calculadora';
import { MenuPage } from '../menu/menu';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	pushCalculator: any;
	pushMenu: any;
  params_addition: Object;
  params_subtraction: Object;
  params_multiplication: Object;
  params_Division: Object;
  params_Exponentiation: Object;

      constructor(public navCtrl: NavController,
                  private socialSharing: SocialSharing,
                  ) {

      	this.pushCalculator = CalculadoraPage;
      	this.pushMenu = MenuPage;
        this.params_addition = { id: 1 };
        this.params_subtraction = { id: 2 };
        this.params_multiplication = { id: 3 };
        this.params_Division = { id: 4 };
        this.params_Exponentiation = { id: 5 };

      }

      openCalculadora() {
            console.log('Open');
        }

        shareSheetShare() {
        this.socialSharing.share("Obrigado!", "Matemática!", "", "").then(() => {
          console.log("Sucesso");
        }).catch(() => {
          console.error("Deu erro");
        });
      }

   

}
