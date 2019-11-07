import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { environment } from '../environment/environment';

@Injectable()
export class LoginService {

  /*
     Classe CadastroService contem a função login().
     Esse serviso precisa ser importado no arquivo "TS" da pagina que será utilizado.
  */

  api: string = environment.server;  //recebe a url da API de environment

  constructor(public http: Http) { }
  //Envia um metedo post para função na API com os dados do usuário
  login(date: { email: string, password: string }): Promise<any> {
    return this.http.post(this.api + '/auth/login', date).toPromise().then(response => response.json())
      .catch(this.handleError);
  }
  
  //Exibe mensagem de erro caso no console
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
