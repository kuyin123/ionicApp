/*
* 设置功能 module 模块
* by q1cha0
* */
import {NgModule} from '@angular/core'
import {IonicModule} from 'ionic-angular'

import {SetComponent} from './set.component'
// 也可建一个BatteryModule在此导入, 替代组件和服务
import {BatteryComponent} from "./battery/battery.component"
import {BatteryHttp} from "./battery/battery.http"
import {BatteryPipe} from "./battery/battery.pipe"
// 机泵数据列表
import {PumpDataListComponent} from "./pump-data-list/pump-data-list.component"
import {PumpDataListHttp} from "./pump-data-list/pump-data-list.http"
// 传感器设置
import {SensorSettingsComponent} from "./sensor-settings/sensor-settings.component"
import {SensorSettingsHttp} from "./sensor-settings/sensor-settings.http"
// 传感器设置点击后的详情

@NgModule({
  imports: [IonicModule],
  declarations: [
    SetComponent,
    BatteryComponent,
    BatteryPipe,
    PumpDataListComponent,
    SensorSettingsComponent
  ],
  entryComponents: [
    SetComponent,
    BatteryComponent,
    PumpDataListComponent,
    SensorSettingsComponent
  ],
  providers: [
    BatteryHttp,
    PumpDataListHttp,
    SensorSettingsHttp
  ],
  exports: [IonicModule]
})
export class SetModule {
}
