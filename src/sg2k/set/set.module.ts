/*
* 设置功能 module 模块
* by q1cha0
* */
import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {SetComponent} from './set.component';
// 也可建一个BatteryModule在此导入, 替代组件和服务
import {BatteryComponent} from "./battery/battery.component"
import {BatteryHttp} from "./battery/battery.http"

import {BatteryPipe} from "./battery/battery.pipe"

@NgModule({
  imports: [IonicModule],
  declarations: [SetComponent, BatteryComponent, BatteryPipe],
  entryComponents: [SetComponent, BatteryComponent],
  providers: [BatteryHttp],
  exports: [IonicModule]
})
export class SetModule {
}
