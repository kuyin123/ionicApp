/*
* 传感器设置模块
* by q1cha0
* */
import {NgModule} from "@angular/core"
import {IonicModule} from "ionic-angular"

import {SensorSettingsComponent} from "./sensor-settings.component"
import {SensorSettingsHttp} from "./sensor-settings.http"

@NgModule({
  imports: [IonicModule],
  declarations: [SensorSettingsComponent],
  entryComponents: [SensorSettingsComponent],
  providers: [SensorSettingsHttp],
  exports: [IonicModule]
})
export class SensorSettingsModule {

}
