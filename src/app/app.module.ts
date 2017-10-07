import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

//plugins
import { IonicStorageModule } from '@ionic/storage';
import {AjustesService } from "../providers/ajustes/ajustes";

import {IntroduccionPage,
TelemetriaPage,
ElectrodoPage,
EstadosPage,
VariablesPage,
TabsPage}
from "../pages/index.paginas";


@NgModule({
  declarations: [
    MyApp,
  //  HomePage
  IntroduccionPage,
  TelemetriaPage,
  ElectrodoPage,
  EstadosPage,
  VariablesPage,
  TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage
    IntroduccionPage,
    TelemetriaPage,
    ElectrodoPage,
    EstadosPage,
    VariablesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AjustesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
