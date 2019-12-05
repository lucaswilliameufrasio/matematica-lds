import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';

@Injectable()
export class ScoreService {
  /*
     Classe CadastroService contem a função score().
     Esse serviso precisa ser importado no arquivo "TS" da pagina que será utilizado.
  */

  punctuation: number;

  constructor() { }

  //Nivel 1
  scoreLevel1(time): number{
    switch(time) {
      case 30:
       this.punctuation = 30
      break;
      case 29:
       this.punctuation = 29
      break;
      case 28:
        this.punctuation = 28
        break;
      case 27:
        this.punctuation = 27
        break;
      case 26:
        this.punctuation = 26
        break;
      case 25:
        this.punctuation = 25
        break;
      case 24:
        this.punctuation = 24
        break;
      case 23:
        this.punctuation = 23
        break;
      case 22:
        this.punctuation = 22
        break;
      case 21:
        this.punctuation = 21
        break;
      case 20:
        this.punctuation = 20
        break;
      case 19:
        this.punctuation = 19
        break;
      case 18:
        this.punctuation = 18
        break;
      case 17:
        this.punctuation = 17
        break;
      case 16:
        this.punctuation = 16
        break;
      case 15:
        this.punctuation = 15
        break;
      case 14:
        this.punctuation = 14
        break;
      case 13:
        this.punctuation = 13
        break;
      case 12:
        this.punctuation = 12
        break;
      case 11:
        this.punctuation = 11
        break;
      case 10:
        this.punctuation = 10
        break;
      case 9:
        this.punctuation = 9
        break;
      case 8:
        this.punctuation = 8
        break;
      case 7:
        this.punctuation = 7
        break;
      case 6:
        this.punctuation = 6
        break;
      case 5:
        this.punctuation = 5
        break;
      case 4:
        this.punctuation = 4
        break;
      case 3:
        this.punctuation = 3
        break;
      case 2:
        this.punctuation = 2
        break;
      case 1:
        this.punctuation = 1
        break;
    }
    return this.punctuation;
  }

  scoreLevel2(time): number{
    switch(time) {
      case 20:
        this.punctuation = 20
        break;
      case 19:
        this.punctuation = 19
        break;
      case 18:
        this.punctuation = 18
        break;
      case 17:
        this.punctuation = 17
        break;
      case 16:
        this.punctuation = 16
        break;
      case 15:
        this.punctuation = 15
        break;
      case 14:
        this.punctuation = 14
        break;
      case 13:
        this.punctuation = 13
        break;
      case 12:
        this.punctuation = 12
        break;
      case 11:
        this.punctuation = 11
        break;
      case 10:
        this.punctuation = 10
        break;
      case 9:
        this.punctuation = 9
        break;
      case 8:
        this.punctuation = 8
        break;
      case 7:
        this.punctuation = 7
        break;
      case 6:
        this.punctuation = 6
        break;
      case 5:
        this.punctuation = 5
        break;
      case 4:
        this.punctuation = 4
        break;
      case 3:
        this.punctuation = 3
        break;
      case 2:
        this.punctuation = 2
        break;
      case 1:
        this.punctuation = 1
        break;
    }
    return this.punctuation;
  }
  scoreLevel3(time): number{
    switch(time) {
      case 10:
        this.punctuation = 10
        break;
      case 9:
        this.punctuation = 9
        break;
      case 8:
        this.punctuation = 8
        break;
      case 7:
        this.punctuation = 7
        break;
      case 6:
        this.punctuation = 6
        break;
      case 5:
        this.punctuation = 5
        break;
      case 4:
        this.punctuation = 4
        break;
      case 3:
        this.punctuation = 3
        break;
      case 2:
        this.punctuation = 2
        break;
      case 1:
        this.punctuation = 1
        break;
    }
    return this.punctuation;
  }
}
