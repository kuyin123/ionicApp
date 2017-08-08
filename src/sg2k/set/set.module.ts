import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {SetComponent} from './set.component';
import {BatteryComponent} from "./battery/battery.component"
// import {BatteryModule} from "./battery/battery.module"
import {BatteryHttp} from "./battery/battery.http"

@NgModule({
  imports: [IonicModule],
  declarations: [SetComponent, BatteryComponent],
  entryComponents: [SetComponent, BatteryComponent],
  providers: [BatteryHttp],
  exports: [IonicModule]
})
export class SetModule {
}
