import {Component} from '@angular/core';
import {NavController} from "ionic-angular";

import {AlarmHttp} from "../alarm/alarm.http"
import {BatteryComponent} from "./battery/battery.component"

@Component({
  selector: 'page-set',
  templateUrl: './set.component.html'
})
export class SetComponent {
  pushPage: any; // 通过属性绑定导航

  constructor(
    public alarmHttp: AlarmHttp,
    public navCtrl: NavController
  ) {
    this.pushPage = BatteryComponent;
  }

}
