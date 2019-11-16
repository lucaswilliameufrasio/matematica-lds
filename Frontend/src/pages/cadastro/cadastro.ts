import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { ToastService } from '../../services/toast.service';
@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  //Recebe o grupo de formulario
  authForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public registerService: RegisterService,
    public nav: NavController,
    public http: Http,
    public toastService: ToastService
  ) {

    //Validação dos dados do Formulario
    this.authForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      senha: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      // telefone: new FormControl('', Validators.required)
    });

  }

  ionViewDidLoad() {

  }

  //Envia os dados do formulario para o service cadastro
  cadastrar(): void {
    let data = {
      nome: this.authForm.value.nome,
      email: this.authForm.value.email,
      senha: this.authForm.value.senha,
      // telefone: this.authForm.value.telefone
    }

    console.log(data);

    this.registerService.register(data).then(res => {
      //Exbibe mensagem para usuário
      this.toastService.presentToast('Cadastrado com sucesso!', "");
      this.navCtrl.pop();
    }).catch(error => {
      this.toastService.presentToast('Dados invalidos!', "");
    });
  }

  //Redireciona para a pagina de login
  goToLogin() {
    this.nav.push(LoginPage);
  }

}
