import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';

@Injectable()
export class RankingService {

  /*
     Classe CadastroService contem a função ranking().
     Esse serviso precisa ser importado no arquivo "TS" da pagina que será utilizado.
  */

  api: string = environment.server;  //recebe a url da API de environment

  constructor(public http: HttpClient) { }
  //Envia um metedo post para função na API que retorna os valores das questões
  ranking(operation): Observable<any> {
    return this.http.get(this.api + '/showRank/' + operation)
      .pipe()
      .catch(this.handleError);
  }

  listMyMatches(operation): Observable<any> {
    return this.http.get(this.api + '/listMyMatches/' + operation)
      .pipe()
      .catch(this.handleError);
  }

  //Exibe mensagem de erro caso no console
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }


}
