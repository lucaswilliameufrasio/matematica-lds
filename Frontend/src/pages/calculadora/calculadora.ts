import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastService } from '../../services/toast.service';
import { LoadingService } from '../../services/loading.service';
import { QuestionsService } from '../../services/questions.service';
import { ScoreService } from '../../services/score.service';
@Component({
  selector: 'page-calculadora',
  templateUrl: 'calculadora.html',
})
export class CalculadoraPage {
  Amount_Play = 0;
  public buttonClicked: boolean = true;
  Selected_Operation: any;
  Number1 = 1;
  Number2 = 2;
  Correct_position: any;
  result: any;
  Value_Position1: any;
  Value_Position2: any;
  Value_Position3: any;
  Value_Position4: any;
  Position1 = 1;
  Position2 = 2;
  Position3 = 3;
  Position4 = 4;
  buttonColor1: string = '#fff9ff';
  buttonColor2: string = '#fff9ff';
  buttonColor3: string = '#fff9ff';
  buttonColor4: string = '#fff9ff';
  time = Date.now();
  valor: any;
  click1: any;

  questoes: Array<any> = [];

  //Desabilita os botões de respostas se for certa
  desabilitar: boolean = false;

  //Temporizador
  maxtime;
  maxtimegame = 0;
  hidevalue;
  stopTimeGame = false;
  timer;
  chaveDeTempo = false;

  //Numeros de tentativas
  contTentativas = 0;
  tentativa1: boolean = false;
  tentativa2: boolean = false;
  tentativa3: boolean = false;

  //Pontuação
  pontuacao = 0;
  hits = 0;

  //Nivel do Jogo
  level = 1;

  //Id da Questão
  mathproblem_id;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    private nativeAudio: NativeAudio,
    private toastService: ToastService,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private viewCtrl: ViewController,
    private scoreService: ScoreService,
    private questionsService: QuestionsService,
    private loading: LoadingService
  ) {

    this.platform.ready().then(() => {
      this.nativeAudio.preloadSimple('uniqueId1', 'assets/audio/zapsplat_cartoon_ascend_slide_whistle_float_up_18047.mp3').then((success) => {
      }, (error) => {
      }
      );
    });
    this.platform.ready().then(() => {
      this.nativeAudio.preloadSimple('uniqueId2', 'assets/audio/zapsplat_cartoon_descend_fast_marimba_18054.mp3').then((success) => {
      }, (error) => {
      }
      );
    });

    this.Selected_Operation = this.navParams.data.Selected_Operation;
    while (this.Number1 < this.Number2) {
      if (this.Selected_Operation.id == 5) {
        this.Number1 = Math.floor(Math.random() * 8 + 1);
        this.Number2 = Math.floor(Math.random() * 3 + 1);
      }
      else {
        this.Number1 = Math.floor(Math.random() * 50 + 1);
        this.Number2 = Math.floor(Math.random() * 50 + 1);
      }
      if (this.Number1 % this.Number2 != 0) {
        this.Number2 = 100;
      }
    }

    this.Correct_position = Math.floor(Math.random() * 4 + 1);
    if (this.Selected_Operation.id == 1) {
      this.result = this.Number1 + this.Number2
    }
    else if (this.Selected_Operation.id == 2) {
      this.result = this.Number1 - this.Number2
    }
    else if (this.Selected_Operation.id == 3) {
      this.result = this.Number1 * this.Number2
    }
    else if (this.Selected_Operation.id == 4) {
      this.result = this.Number1 / this.Number2
    }
    else if (this.Selected_Operation.id == 5) {
      this.result = Math.pow(this.Number1, this.Number2);
    }
  }

  ngOnInit() {
    this.getQuestions()
  }

  ionViewDidLoad() {
    this.levelTime()
    this.StartTimer()
    this.StartTimerGame()
    this.viewCtrl.showBackButton(false);
  }

  questions(result) {

    if (this.Correct_position == this.Position1) {
      this.Value_Position1 = this.result;
      this.Value_Position2 = this.result + Math.floor(Math.random() * 25 + 1);
      this.Value_Position3 = this.result - 5;
      this.Value_Position4 = Math.floor(Math.random() * 100 + 1);
    }
    else if (this.Correct_position == this.Position2) {
      this.Value_Position2 = this.result;
      this.Value_Position1 = this.result + Math.floor(Math.random() * 25 + 1);
      this.Value_Position3 = this.result - 5;
      this.Value_Position4 = Math.floor(Math.random() * 100 + 1);
    }
    else if (this.Correct_position == this.Position3) {
      this.Value_Position3 = this.result;
      this.Value_Position1 = this.result + Math.floor(Math.random() * 25 + 1);
      this.Value_Position2 = this.result - 5;
      this.Value_Position4 = Math.floor(Math.random() * 100 + 1);
    }
    else if (this.Correct_position == this.Position4) {
      this.Value_Position4 = this.result;
      this.Value_Position1 = this.result + Math.floor(Math.random() * 25 + 1);
      this.Value_Position2 = this.result - 5;
      this.Value_Position3 = Math.floor(Math.random() * 100 + 1);
    }

  }

  getQuestions() {
    this.questionsService.questions(this.Selected_Operation.id, this.hits)
      .subscribe(res => {
        this.level = res.data[0].stage;
        this.questoes = res.data;
        this.Number1 = res.data[0].problem;
        this.result = res.data[0].result;
        this.questions(this.result)
        this.mathproblem_id = res.data[0].id
      })
  }

  StartTimer() {
    this.timer = setTimeout(x => {
      //Se o tempo for igual a 0 passa para a proxima pergunta e retorna o tempo
      if (this.maxtime <= 0) {
        this.changeNumber(this.valor, this.click1);
        this.tempoEsgotado();
        this.levelTime();
      }
      //Decrementa o tempo
      this.maxtime -= 1
      //Se o tempo for igual a 0 e o numero de tentativas for menor ou iqual 2 continua contando
      if (this.maxtime >= 0 && this.contTentativas <= 2 && this.chaveDeTempo == false) {
        this.hidevalue = false;
        this.StartTimer();
      }
      if (this.contTentativas === 3) {
        this.hidevalue = true;
      }
    }, 1000);
  }

  StartTimerGame() {
    this.timer = setTimeout(x => {
      //Decrementa o tempo
      this.maxtimegame += 1
      //Se o tempo for igual a 0 e o numero de tentativas for menor ou iqual 2 continua contando
      if (this.stopTimeGame === false) {
        this.hidevalue = false;
        this.StartTimerGame();
      } else {
        this.hidevalue = true;
      }
    }, 1000);
  }

  levelTime() {
    if (this.level === 1) {
      this.maxtime = 30
    }
    else if (this.level === 2) {
      this.maxtime = 20
    } else {
      this.maxtime = 10
    }
  }

  scoreLevel() {
    if (this.level === 1) {
      this.pontuacao += this.scoreService.scoreLevel1(this.maxtime);
    }
    else if (this.level === 2) {
      this.pontuacao += this.scoreService.scoreLevel2(this.maxtime);
    } else {
      this.pontuacao += this.scoreService.scoreLevel3(this.maxtime);
    }
  }

  acerto() {
    this.hits += 1;
    const timer = this.maxtime;
    //Se o tempo for diferente de zero executa o acerto, se não tempo esgotado
    if (this.maxtime != 0) {
      this.scoreLevel()
      this.chaveDeTempo = true;
      let toast = this.toastCtrl.create({
        message: 'Resposta Correta!',
        duration: 2000,
        position: 'bottom'
      });
      toast.onDidDismiss(() => {
        this.getQuestions();
        //Para a contagem até mudar para a proxima questão
        this.chaveDeTempo = false;
        this.desabilitar = false
        this.changeNumber(this.valor, this.click1);
        this.StartTimer()
        this.levelTime()
      });
      toast.present(toast);
    }
  }

  //Muda a questão se o tempo esgotar
  tempoEsgotado() {

    this.getQuestions();

    if (this.contTentativas === 0) {
      this.tentativa1 = true;
      this.contTentativas += 1;
    }
    else if (this.contTentativas === 1) {
      this.tentativa2 = true;
      this.contTentativas += 1;
    }
    else if (this.contTentativas === 2) {
      this.tentativa3 = true;
      this.contTentativas += 1;
      this.fimPartida()
    }
    this.toastService.presentToast("Ops! Tempo esgotado", "error")
  }

  erro() {
    if (this.contTentativas === 0) {
      this.tentativa1 = true;
      this.contTentativas += 1;
    }
    else if (this.contTentativas === 1) {
      this.tentativa2 = true;
      this.contTentativas += 1;
    }
    else if (this.contTentativas === 2) {
      this.stopTimeGame = true;
      console.log("Tempo da partida: ", this.maxtimegame);
      this.tentativa3 = true;
      this.contTentativas += 1;
      this.fimPartida()
    }
    this.loading.presentWithGif()
    const toast = this.toastCtrl.create({
      message: 'Ops! Pense mais um pouquinho!',
      duration: 2000,
      position: 'bottom',
      cssClass: "error",
    });
    toast.onDidDismiss(() => {
      this.backToWhite();
    });
    // toast.onDidDismiss(() => {
    // 	this.changeNumber(this.valor, this.click1);
    // });
    toast.present();
    this.loading.dismiss()
  }

  presentAlert() {
    let time = this.maxtimegame - 1;
    const ponto = String(this.pontuacao)
    let alert = this.alertCtrl.create({
      title: 'Seu desempenho',
      subTitle: ("Pontuação: " + ponto + ", Tempo: " + time),
      buttons: ['Fechar']
    });
    alert.present();
  }

  //Finaliza a partida mostrando a pontuação
  fimPartida() {
    const dados = {
      score: this.pontuacao,
      time: this.maxtimegame,
      operation: this.Selected_Operation.id,
      hits: this.hits
    }
    this.questionsService.endGame(dados)
      .subscribe(res => {
        this.presentAlert()
        this.navCtrl.setRoot(HomePage)
      })
  }

  // Verifica resposta
  verifyAnswer(valor: any, click1: any) {
    this.loading.presentWithGif()
    const dados = {
      operation: this.Selected_Operation.id,
      answer: valor,
      hits: this.hits,
      mathproblem_id: this.mathproblem_id
    }
    this.questionsService.answer(dados)
      .subscribe(res => {

        if (res.message === 'correct_answer') {
          this.desabilitar = true
          this.colorButtonAcerto(click1);
          this.acerto();

          this.loading.dismiss();
        } else {
          this.colorButtonErro(click1);
        }
      })
    this.loading.dismiss();
  }

  colorButtonAcerto(click1: any) {
    // Se a resposta estiver correta, faça...
    if (this.buttonClicked) {
      this.nativeAudio.play('uniqueId1').then((success) => {
      }, (error) => {
      });
    }
    if (click1 == 1) {
      this.buttonColor1 = '#70e733';
    } else if (click1 == 2) {
      this.buttonColor2 = '#70e733';
    } else if (click1 == 3) {
      this.buttonColor3 = '#70e733';
    } else if (click1 == 4) {
      this.buttonColor4 = '#70e733';
    }
  }

  colorButtonErro(click1: any) {
    //Se a resposta estiver incorreta, faça...
    if (this.buttonClicked) {
      this.nativeAudio.play('uniqueId2').then((success) => {
      }, (error) => {
      });
    }
    if (click1 == 1) {
      this.buttonColor1 = '#ff9600';
      if (this.Correct_position == this.Position1) {
        // this.buttonColor1 = '#70e733';
        this.erro();
      }
      else if (this.Correct_position == this.Position2) {
        // this.buttonColor2 = '#70e733';
        this.erro();
      }
      else if (this.Correct_position == this.Position3) {
        // this.buttonColor3 = '#70e733';
        this.erro();
      }
      else if (this.Correct_position == this.Position4) {
        // this.buttonColor4 = '#70e733';
        this.erro();
      }
    } else if (click1 == 2) {
      this.buttonColor2 = '#ff9600';

      if (this.Correct_position == this.Position1) {
        // this.buttonColor1 = '#70e733';
        this.erro();
      }
      else if (this.Correct_position == this.Position2) {
        // this.buttonColor2 = '#70e733';
        this.erro();
      }
      else if (this.Correct_position == this.Position3) {
        // this.buttonColor3 = '#70e733';
        this.erro();
      }
      else if (this.Correct_position == this.Position4) {
        // this.buttonColor4 = '#70e733';
        this.erro();
      }
    } else if (click1 == 3) {
      this.buttonColor3 = '#ff9600';
      if (this.Correct_position == this.Position1) {
        // this.buttonColor1 = '#70e733';
        this.erro();
      }
      else if (this.Correct_position == this.Position2) {
        // this.buttonColor2 = '#70e733';
        this.erro();
      }
      else if (this.Correct_position == this.Position3) {
        // this.buttonColor3 = '#70e733';
        this.erro();
      }
      else if (this.Correct_position == this.Position4) {
        // this.buttonColor4 = '#70e733';
        this.erro();
      }

    } else if (click1 == 4) {
      this.buttonColor4 = '#ff9600';
      if (this.Correct_position == this.Position1) {
        // this.buttonColor1 = '#70e733';
        this.erro();
      }
      else if (this.Correct_position == this.Position2) {
        // this.buttonColor2 = '#70e733';
        this.erro();
      }
      else if (this.Correct_position == this.Position3) {
        // this.buttonColor3 = '#70e733';
        this.erro();
      }
      else if (this.Correct_position == this.Position4) {
        // this.buttonColor4 = '#70e733';
        this.erro();
      }
    }
  }

  // Muda os números do cálculo
  changeNumber(valor: any, click1: any) {
    this.Number1 = 1;
    this.Number2 = 2;
    while (this.Number1 < this.Number2) {
      if (this.Selected_Operation.id == 5) {
        this.Number1 = Math.floor(Math.random() * 8 + 1);
        this.Number2 = Math.floor(Math.random() * 3 + 1);
      }
      else {
        this.Number1 = Math.floor(Math.random() * 50 + 1);
        this.Number2 = Math.floor(Math.random() * 50 + 1);
      }
      if (this.Number1 % this.Number2 != 0) {
        this.Number2 = 100;
      }
    }

    this.Correct_position = Math.floor(Math.random() * 4 + 1);

    if (this.Selected_Operation.id == 1) {
      this.result = this.Number1 + this.Number2
    }
    else if (this.Selected_Operation.id == 2) {

      this.result = this.Number1 - this.Number2
    }
    else if (this.Selected_Operation.id == 3) {

      this.result = this.Number1 * this.Number2
    }
    else if (this.Selected_Operation.id == 4) {

      this.result = this.Number1 / this.Number2
    }
    else if (this.Selected_Operation.id == 5) {

      this.result = Math.pow(this.Number1, this.Number2);
    }

    // if (this.Correct_position == this.Position1) {
    //   this.Value_Position1 = this.result;
    //   this.Value_Position2 = this.result + Math.floor(Math.random() * 25 + 1);
    //   this.Value_Position3 = this.result - 5;
    //   this.Value_Position4 = Math.floor(Math.random() * 100 + 1);
    // }
    // else if (this.Correct_position == this.Position2) {
    //   this.Value_Position2 = this.result;
    //   this.Value_Position1 = this.result + Math.floor(Math.random() * 25 + 1);
    //   this.Value_Position3 = this.result - 5;
    //   this.Value_Position4 = Math.floor(Math.random() * 100 + 1);
    // }
    // else if (this.Correct_position == this.Position3) {
    //   this.Value_Position3 = this.result;
    //   this.Value_Position1 = this.result + Math.floor(Math.random() * 25 + 1);
    //   this.Value_Position2 = this.result - 5;
    //   this.Value_Position4 = Math.floor(Math.random() * 100 + 1);
    // }
    // else if (this.Correct_position == this.Position4) {
    //   this.Value_Position4 = this.result;
    //   this.Value_Position1 = this.result + Math.floor(Math.random() * 25 + 1);
    //   this.Value_Position2 = this.result - 5;
    //   this.Value_Position3 = Math.floor(Math.random() * 100 + 1);
    // }

    this.buttonColor1 = '#fff9ff';
    this.buttonColor2 = '#fff9ff';
    this.buttonColor3 = '#fff9ff';
    this.buttonColor4 = '#fff9ff';
  }

  backToWhite() {
    this.buttonColor1 = '#fff9ff';
    this.buttonColor2 = '#fff9ff';
    this.buttonColor3 = '#fff9ff';
    this.buttonColor4 = '#fff9ff';
  }

  onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
  }
}
