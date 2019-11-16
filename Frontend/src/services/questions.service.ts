import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionsService {

  /*
     Classe CadastroService contem a função questions().
     Esse serviso precisa ser importado no arquivo "TS" da pagina que será utilizado.
  */

  api: string = environment.server;  //recebe a url da API de environment

  constructor(public http: Http) { }
  //Envia um metedo get para função na API que retorna os valores das questões
  questions(): Observable<any> {
    return this.http.get(this.api + '')
      .pipe()
      .catch(this.handleError);
  }

  // Envia a resposta para a rota na API que retorna o resultado
  answer(): Observable<any> {
    return this.http.post(this.api + '', {})
      .pipe()
      .catch(this.handleError);
  }

  //Exibe mensagem de erro caso no console
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
