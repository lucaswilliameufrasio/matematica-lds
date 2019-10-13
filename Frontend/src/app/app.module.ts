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
import { CalculadoraTdahPage } from '../pages/calculadora-tdah/calculadora-tdah';
import { HttpClientModule } from "@angular/common/http";
import { HomeTDAHPage } from '../pages/home_tdah/home_tdah';
import { AberturaPage } from '../pages/abertura/abertura';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { EnvironmentEnvironmentProvider } from '../providers/environment-environment/environment-environment';
import { EnvironmentProvider } from '../providers/environment/environment';

export function jwtOptionsFactory(storage) {
  
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    // whitelistedDomains: ['127.0.0.1:8001']
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalculadoraPage,
    MenuPage,
    LoginPage,
    CadastroPage,
    HomeTDAHPage,
    AberturaPage,
    CalculadoraTdahPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage],
      }
    })
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
    AberturaPage,
    CalculadoraTdahPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    NativeAudio,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    EnvironmentEnvironmentProvider,
    EnvironmentProvider,
  ]
})
export class AppModule { }
