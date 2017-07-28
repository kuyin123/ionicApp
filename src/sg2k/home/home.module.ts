import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {HomeComponent} from './home.component';
import { EchartsNg2Module } from 'echarts-ng2';
import { HomeHttp } from './home.http'

@NgModule({
  imports: [IonicModule,EchartsNg2Module],
  declarations: [HomeComponent],
  entryComponents: [HomeComponent],
  providers: [HomeHttp],
  exports: [IonicModule]
})
export class HomeModule {
}
