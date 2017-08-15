/*
* 传感器设置的详情页面
* */
import {Component, OnInit} from "@angular/core"

import {PassDataService} from "../sensor-settings.service"


@Component({
  selector: 'sensor-settings-details',
  templateUrl: './sensor-settings-details.component.html',
})
export class SensorSettingsDetailsComponent implements OnInit {
  item: any = [];

  constructor(public passData: PassDataService) {

  }

  ngOnInit() {
    // this.item = this.service.sensorSettingsItem;
    this.item = this.passData.sensorItem;
  }


}
