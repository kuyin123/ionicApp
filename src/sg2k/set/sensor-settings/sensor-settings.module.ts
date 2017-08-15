/*
* 传感器设置模块
* by q1cha0
* */
import {NgModule} from "@angular/core"
import {IonicModule} from "ionic-angular"

import {SensorSettingsComponent} from "./sensor-settings.component"
import {SensorSettingsHttp} from "./sensor-settings.http"
import {SensorSettingsDetailsComponent} from "./sensor-settings-details/sensor-settings-details.component"
import {PassDataService} from "./sensor-settings.service"

@NgModule({
  imports: [IonicModule],
  declarations: [
    SensorSettingsComponent,
    SensorSettingsDetailsComponent
  ],
  entryComponents: [
    SensorSettingsComponent,
    SensorSettingsDetailsComponent
  ],
  providers: [
    SensorSettingsHttp,
    PassDataService
],
  exports: [IonicModule]
})
export class SensorSettingsModule {

}
