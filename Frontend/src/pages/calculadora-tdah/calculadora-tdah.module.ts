import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculadoraTdahPage } from './calculadora-tdah';

@NgModule({
  declarations: [
    CalculadoraTdahPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculadoraTdahPage),
  ],
})
export class CalculadoraTdahPageModule {}
