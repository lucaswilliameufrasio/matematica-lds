import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { ToastController } from 'ionic-angular';
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

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public platform: Platform,
		private nativeAudio: NativeAudio,
		public toastCtrl: ToastController,
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

		this.Selected_Operation = this.navParams.data;

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

	ionViewDidLoad() {
	}

	acerto() {
		let toast = this.toastCtrl.create({
		  message: 'Resposta Correta!',
		  duration: 2000,
		  position: 'bottom'
		});
		toast.onDidDismiss(() => {
			this.changeNumber(this.valor, this.click1);
		});
		toast.present(toast);
	}

	erro() {
		const toast = this.toastCtrl.create({
			message: 'Ops! Pense mais um pouquinho!',
			showCloseButton: true,
			closeButtonText: 'Ok',
			cssClass: "error",
		});
		toast.onDidDismiss(() => {
			this.backToWhite();
		});
		// toast.onDidDismiss(() => {
		// 	this.changeNumber(this.valor, this.click1);
		// });
		toast.present();
	}

	Selection(valor: any, click1: any) {
		// Se a resposta estiver correta, faça...
		if (valor == this.result) {
			this.acerto();
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
		//Se a resposta estiver incorreta, faça...
		else {
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

		if (this.Correct_position == this.Position1) {
			;
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
		this.buttonColor1 = '#fff9ff';
		this.buttonColor2 = '#fff9ff';
		this.buttonColor3 = '#fff9ff';
		this.buttonColor4 = '#fff9ff';
	}

	backToWhite(){
		this.buttonColor1 = '#fff9ff';
		this.buttonColor2 = '#fff9ff';
		this.buttonColor3 = '#fff9ff';
		this.buttonColor4 = '#fff9ff';	
	}
	
	onButtonClick() {
		this.buttonClicked = !this.buttonClicked;
	}

	
}
