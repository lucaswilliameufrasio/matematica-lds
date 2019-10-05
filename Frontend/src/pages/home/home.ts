import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CalculadoraPage } from '../calculadora/calculadora';
import { MenuPage } from '../menu/menu';
import { LoginPage } from '../login/login';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(
    public navCtrl: NavController,
    private socialSharing: SocialSharing,
    public nav: NavController,
    public http: HttpClient,
    private storage: Storage,
  ) {
    this.pushCalculator = CalculadoraPage;
    this.pushMenu = MenuPage;
    this.params_addition = { id: 1 };
    this.params_subtraction = { id: 2 };
    this.params_multiplication = { id: 3 };
    this.params_Division = { id: 4 };
    this.params_Exponentiation = { id: 5 };
  }
  ionViewDidLoad() {
    this.storage.get('access_token').then(val => {
      if (val != null) {
        console.log("Token armazenado : ", val)
      }
      else {
        console.log("Valor nulo ou indefinido:", val)
      }
    }, err => {
      console.log("Erro no Storage : ", err)
    })
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

  logout() {

    let api = 'http://127.0.0.1:8001';

    this.storage.get('access_token').then((token) => {
      if (token != null) {
        let headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
          'Accept': 'application/json'
        });

        console.log(token);
        console.log(headers);

        this.http.post(api + '/auth/logout', {},{
          headers: headers,
        })
          .subscribe(res => {
            console.log(res);
            console.log(headers)
            if (res['success']) {
              alert("Saiu com sucesso.")
              this.storage.remove('access_token');
              this.nav.push(LoginPage);
            } else {
              alert(res)
            }
          }, (error) => {
            console.log(error);
          });
      }
    }
    )
  }
}
