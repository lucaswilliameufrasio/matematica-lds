import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { AberturaPage } from '../abertura/abertura';
import { LoadingService } from '../../services/loading.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  authForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginService: LoginService,
    public loadingService: LoadingService,
    public nav: NavController,
    public http: HttpClient,
    public toastCtrl: ToastController,
    private storage: Storage,
  ) {
    this.authForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: new FormControl('', Validators.required),
    });
  }

  ionViewDidLoad() {
  
  }

  //Exibe mensagem de login com sucesso se não houver erro
  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  // Envia os dados para o services/login.service
  fazerLogin(): void {
    let data = {
      email: this.authForm.value.email,
      password: this.authForm.value.password
    }
    this.loginService.login(data).then(res => {
      this.loadingService.presentWithGif();
      if (res['success']) {
        this.presentToast('Login efetuado com sucesso');
        localStorage.setItem('token', res['access_token']);
        this.storage.set('access_token', res['access_token']);
        this.nav.setRoot(HomePage);
      } else {
        this.presentToast('Email ou senha invalido');
      }
      this.loadingService.dismiss()
    }).catch(error => {
      console.log('Não possivel fazer login');
    });
  }

  //Redireciona para a pagina de Cadastro
  goToCadastro() {
    this.nav.push(CadastroPage);
  }

  // Retorna a pagina de abertura
  goToHome() {
    this.navCtrl.setRoot(AberturaPage);
  }

}
