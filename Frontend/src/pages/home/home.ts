import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalculadoraPage } from '../calculadora/calculadora';

import { MenuPage } from '../menu/menu';
import { LoginPage } from '../login/login';
import { PerfilPage } from '../perfil/perfil';
import { RankingPage} from '../ranking/ranking';

import { Storage, IonicStorageModule } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LogoutService } from '../../services/logout.service';
import { ToastService } from '../../services/toast.service';
import { LoadingService } from '../../services/loading.service';
import { PartidaPage } from '../partida/partida';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  pushCalculator: any;
  pushMenu: any;
  gotoProfile: any;
  gotoRanking: any;
  params_addition: Object;
  params_subtraction: Object;
  params_multiplication: Object;
  params_Division: Object;
  params_Exponentiation: Object;
  //recebe a reposta da res
  messagemLogout: any;

  constructor(
    public navCtrl: NavController,
    private logoutService: LogoutService,
    public nav: NavController,
    private toast: ToastService,
    private loadingService: LoadingService,
    public http: HttpClient,
    private storage: Storage,
  ) {
    this.pushCalculator = PartidaPage;
    this.pushMenu = MenuPage;
    this.gotoProfile = PerfilPage;
    this.gotoRanking = RankingPage;
    this.params_addition = { id: 1 };
    this.params_subtraction = { id: 2 };
    this.params_multiplication = { id: 3 };
    this.params_Division = { id: 4 };
    this.params_Exponentiation = { id: 5 };
  }
  ionViewDidLoad() {
  }

  openCalculadora() {
    console.log('Open');
  }

  // Realiza o logout do usuário, remove o token do localStorage e retorna a pagina de login
  logout() {
    this.logoutService.logout()

    .subscribe(res => {
      this.loadingService.presentWithGif()
      this.messagemLogout = res;
      if(this.messagemLogout.success === true){
        this.storage.remove('access_token')
        this.toast.presentToast("Até logo", "")
        this.navCtrl.setRoot(LoginPage)
      } else {
        this.toast.presentToast("Ops! algo deu errado tente novamente", "")
      }
      this.loadingService.dismiss()
    })
  }
}
