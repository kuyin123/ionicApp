import {Component} from '@angular/core';
import {App} from "ionic-angular"

import {BatteryComponent} from "./battery/battery.component"
import {PumpDataListComponent} from "./pump-data-list/pump-data-list.component"
import {SensorSettingsComponent} from "./sensor-settings/sensor-settings.component"

@Component({
  selector: 'page-set',
  templateUrl: './set.component.html'
})
export class SetComponent {
  pushPage: any; // 通过属性绑定导航

  constructor(public appCtrl: App) {

  }

  public gotoBattery(): void {
    this.appCtrl.getRootNav().push(BatteryComponent);
  }

  public gotoPumpDataList(): void {
    this.appCtrl.getRootNav().push(PumpDataListComponent);
  }

  public gotoSensorSettings(): void {
    this.appCtrl.getRootNav().push(SensorSettingsComponent);
  }

}
