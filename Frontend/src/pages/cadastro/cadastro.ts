import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  nome: string = '';
  email: string = '';
  senha: string = '';
  telefone: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public nav: NavController,
    public http: HttpClient,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cadastrar() {
    alert(this.nome + this.email + this.senha + this.telefone);

    var api = 'http://127.0.0.1:8001';
    var dados = JSON.stringify({ nome: this.nome, email: this.email, senha: this.senha, telefone: this.telefone });

    this.http.post(api + '/auth/register', dados, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
    })
      .subscribe(res => {
        console.log(res['data']);
        alert("Cadastrado com sucesso.")
        alert('Bem vindo, ' + res['data'].name);
        this.nav.setRoot(HomePage);
      }, (error) => {
        console.log(error);
      });
  }
  goToLogin() {
    this.nav.push(LoginPage);
  }

}
