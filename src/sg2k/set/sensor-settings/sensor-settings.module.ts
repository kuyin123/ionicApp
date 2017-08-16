/*
* 传感器设置模块
* by q1cha0
* */
import {NgModule} from "@angular/core"

import {IonicModule} from "ionic-angular"

import {SensorSettingsHttp} from "./sensor-settings.http"

import {PassDataService} from "./sensor-settings.service"

import {SensorSettingsDetailsPipe} from "./sensor-settings-details/sensor-settings-details.pipe";

/* by q1cha0 */
import {SensorSettingsComponent} from "./sensor-settings.component"
import {SensorSettingsDetailsComponent} from "./sensor-settings-details/sensor-settings-details.component"
/* by bo */
import {SensorSettingsConfigComponent} from "./sensor-settings-config/sensor-settings-config.component"

@NgModule({
  imports: [IonicModule],
  declarations: [
    SensorSettingsComponent,
    SensorSettingsDetailsComponent,
    SensorSettingsConfigComponent,
    SensorSettingsDetailsPipe
  ],
  entryComponents: [
    SensorSettingsComponent,
    SensorSettingsDetailsComponent,
    SensorSettingsConfigComponent
  ],
  providers: [
    SensorSettingsHttp,
    PassDataService
],
  exports: [IonicModule]
})
export class SensorSettingsModule {

}
