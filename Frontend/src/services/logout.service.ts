import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { environment } from '../environment/environment';

@Injectable()
export class LogoutService {

  /*
     Classe CadastroService contem a função login().
     Esse serviso precisa ser importado no arquivo "TS" da pagina que será utilizado.
  */

  api: string = environment.server;  //recebe a url da API de environment

  constructor(public http: Http) { }
  //Envia um metedo post para função na API com os dados do usuário
  logout(headers) {
    return this.http.post(this.api + '/auth/logout', {}, {
      headers: headers,
    })
  }
  //Exibe mensagem de erro caso no console

}
