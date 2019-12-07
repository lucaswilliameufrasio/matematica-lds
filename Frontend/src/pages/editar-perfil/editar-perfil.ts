import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PerfilService } from '../../services/perfil.service';
import { ToastService } from '../../services/toast.service';

@IonicPage()
@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {

  authForm: FormGroup;
  perfil: any;

  constructor(public toastService: ToastService, private perfilService: PerfilService ,public navCtrl: NavController, public navParams: NavParams) {

    this.authForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      // email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
    });
  }

  ionViewDidLoad() {
    this.getPerfil()
  }

  goToBack(){
    this.navCtrl.pop();
  }

  getPerfil() {
    this.perfilService.perfil()
      .subscribe(res => {
        this.perfil = res
        console.log(this.perfil);
      })
  }

  editar(){
    const dados = {
      name: this.authForm.value.nome
      // email: this.authForm.value.email,
    }
    console.log("Dados: ", dados);

    this.perfilService.editar(dados)
    .subscribe(res => {
      this.toastService.presentToast('Dados alterados com sucesso!', "");
      console.log(res);
    })
  }

}
