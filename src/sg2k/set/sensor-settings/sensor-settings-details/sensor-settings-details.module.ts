/*
* 传感器设置详情模块
* by q1cha0
* */
import {NgModule} from "@angular/core"
import {IonicModule} from "ionic-angular"

import {SensorSettingsDetailsComponent} from "./sensor-settings-details.component"
// import {SensorSettingsDetailsHttp} from "./sensor-settings-details.http"

@NgModule({
  imports: [IonicModule],
  declarations: [SensorSettingsDetailsComponent],
  entryComponents: [SensorSettingsDetailsComponent],
  providers: [],
  exports: [IonicModule]
})
export class SensorSettingsDetailsModule {

}
