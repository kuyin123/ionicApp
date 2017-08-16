/*
* 电量统计模块的module
* by q1cha0
* */
import {NgModule} from "@angular/core"
import {IonicModule} from "ionic-angular"

import {BatteryComponent} from "./battery.component"
import {BatteryHttp} from "./battery.http"
import {BatteryPipe} from "./battery.pipe"

@NgModule({
  imports: [IonicModule],
  declarations: [BatteryComponent, BatteryPipe],
  entryComponents: [BatteryComponent],
  providers: [BatteryHttp],
  exports: [IonicModule]
})
export class BatteryModule {

}
