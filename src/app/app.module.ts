import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeAudio } from '@ionic-native/native-audio';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalculadoraPage } from '../pages/calculadora/calculadora';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { HttpClientModule } from "@angular/common/http";
import { HomeTDAHPage } from '../pages/home_tdah/home_tdah';
import { AberturaPage } from '../pages/abertura/abertura';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalculadoraPage,
    MenuPage,
    LoginPage,
    CadastroPage,
    HomeTDAHPage,
    AberturaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalculadoraPage,
    MenuPage,
    LoginPage,
    CadastroPage,
    HomeTDAHPage,
    AberturaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
