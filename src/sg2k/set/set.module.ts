/*
* 设置功能 module 模块
* by q1cha0
* */
import {NgModule} from '@angular/core'
import {IonicModule} from 'ionic-angular'

import {SetComponent} from './set.component'
import {BatteryModule} from "./battery/battery.module"
import {SensorSettingsComponent} from "./sensor-settings/sensor-settings.component"

// 机泵数据列表
import {PumpDataListComponent} from "./pump-data-list/pump-data-list.component"
import {PumpDataListHttp} from "./pump-data-list/pump-data-list.http"
import {SensorSettingsModule} from "./sensor-settings/sensor-settings.module";
// 传感器设置
// import {SensorSettingsComponent} from "./sensor-settings/sensor-settings.component"
// import {SensorSettingsHttp} from "./sensor-settings/sensor-settings.http"
// 传感器设置点击后的详情

@NgModule({
  imports: [
    IonicModule,
    BatteryModule,
    SensorSettingsModule
  ],
  declarations: [
    SetComponent,
    // BatteryComponent,
    // BatteryPipe,
    PumpDataListComponent,
    // SensorSettingsComponent
  ],
  entryComponents: [
    SetComponent,
    // BatteryComponent,
    PumpDataListComponent,
    // SensorSettingsComponent
  ],
  providers: [
    // BatteryHttp,
    PumpDataListHttp,
    // SensorSettingsHttp
  ],
  exports: [IonicModule]
})
export class SetModule {
}
