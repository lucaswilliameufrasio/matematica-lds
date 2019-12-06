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
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeTDAHPage } from '../pages/home_tdah/home_tdah';
import { AberturaPage } from '../pages/abertura/abertura';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { RegisterService } from '../services/register.service';
import { LoginService } from '../services/login.service';
import { BrMaskerModule } from 'br-mask';
import { LogoutService } from '../services/logout.service';
import { ToastService } from '../services/toast.service';


import { PerfilPage } from '../pages/perfil/perfil';
import { RankingPage } from '../pages/ranking/ranking';
import { VerifyTokenService } from '../services/verifyToken.service';
import { InterceptorTokenProvider } from '../providers/interceptor-token/interceptor-token';
import { LoadingService } from '../services/loading.service';
import { QuestionsService } from '../services/questions.service';
import { ScoreService } from '../services/score.service';
import { RankingService } from '../services/ranking.service';
import { PartidaPage } from '../pages/partida/partida';
import { PerfilService } from '../services/perfil.service';

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
    PartidaPage,
    HomeTDAHPage,
    AberturaPage,
    CalculadoraTdahPage,
    PerfilPage,
    RankingPage
  ],
  imports: [
    BrowserModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
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
    PartidaPage,
    CadastroPage,
    HomeTDAHPage,
    AberturaPage,
    CalculadoraTdahPage,
    PerfilPage,
    RankingPage,
  ],
  providers: [
    RegisterService,
    LoginService,
    LogoutService,
    LoadingService,
    StatusBar,
    SplashScreen,
    QuestionsService,
    RankingService,
    ToastService,
    PerfilService,
    VerifyTokenService,
    SocialSharing,
    ScoreService,
    NativeAudio,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorTokenProvider, multi: true },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
