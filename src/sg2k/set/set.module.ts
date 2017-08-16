/*
* 设置功能 module 模块
* by q1cha0
* */
import {NgModule} from '@angular/core'
import {IonicModule} from 'ionic-angular'

import {SetComponent} from './set.component'
import {BatteryModule} from "./battery/battery.module"
import {SensorSettingsModule} from "./sensor-settings/sensor-settings.module";
// 测试 忽略
import {PumpDataListModule} from "./pump-data-list/pump-data-list.module"

@NgModule({
  imports: [
    IonicModule,
    BatteryModule,
    SensorSettingsModule,
    PumpDataListModule
  ],
  declarations: [
    SetComponent
  ],
  entryComponents: [
    SetComponent
  ],
  providers: [],
  exports: [IonicModule]
})
export class SetModule {
}
