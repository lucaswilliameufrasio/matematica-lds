import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class CadastroService {
  /*
      Classe CadastroService contem a função casdastrar(). 
      Esse serviso precisa ser importado no arquivo "TS" da pagina que será utilizado.
  */
  constructor( public http: HttpClient) {}

  //Envia um metedo post para função na API com os dados do usuário 
  cadastrar(){
  }

}