import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { environment } from '../environment/environment';

@Injectable()
export class RegisterService {

  /*
     Classe CadastroService contem a função RegisterService().
     Esse serviso precisa ser importado no arquivo "TS" da pagina que será utilizado.
  */

  api: string = environment.server;  //recebe a url da API de environment

  constructor(public http: Http) { }
  //Envia um metedo post para função na API com os dados do usuário
  register(date: { nome: string, email: string, senha: string, telefone: string }): Promise<any> {
    return this.http.post(this.api + '/auth/register', date)
    .toPromise()
    .catch(this.handleError);
  }
  //Exibe mensagem de erro caso no console
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
