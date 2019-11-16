
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LogoutService {

  /*
     Classe CadastroService contem a função logout().
     Esse serviso precisa ser importado no arquivo "TS" da pagina que será utilizado.
  */

  api: string = environment.server;  //recebe a url da API de environment

  constructor(public http: HttpClient) { }

  //Envia um metodo post para função na API invalidado o token
  logout():Observable<any>{
    return this.http.post(this.api + '/auth/logout', {})
    .pipe(
      catchError(this.handleError)
    )
  }
  //Exibe mensagem de erro caso no console
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
