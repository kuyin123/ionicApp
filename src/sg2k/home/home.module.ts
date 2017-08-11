import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {HomeComponent} from './home.component';
import { EchartsNg2Module } from 'echarts-ng2';
import { HomeHttp } from './home.http'

import {GetTypePipe} from './get-type.pipe'

//import {AutoFitLayout} from './ngEcharts/auto-fit-layout.directive'

@NgModule({
  imports: [IonicModule,EchartsNg2Module],
  declarations: [HomeComponent,GetTypePipe],
  entryComponents: [HomeComponent],
  providers: [HomeHttp],
  exports: [IonicModule]
})
export class HomeModule {
}
