import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage, IonicStorageModule } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string = '';
  senha: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public nav: NavController,
    public http: HttpClient,
    private storage: Storage,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToHome() {
    alert('Email: ' +this.email);

    let api = 'http://127.0.0.1:8001';
    let dados = JSON.stringify({ email: this.email, password: this.senha });

    this.http.post(api + '/auth/login', dados, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
    })
      .subscribe(res => {
        console.log(res);
        if (res['success']) {
          alert("Logado com sucesso.")
          this.storage.set('access_token', res['access_token']);
          this.nav.setRoot(HomePage);
        } else {
          alert("O email ou senha parecem estar errados.")
        }
      }, (error) => {
        console.log(error);
      });
  }

  goToCadastro() {
    this.nav.push(CadastroPage);
  }

}
