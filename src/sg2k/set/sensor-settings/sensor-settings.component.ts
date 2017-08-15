/*
* 传感器设置的逻辑层
* by q1cha0
* */
import {Component, OnInit} from "@angular/core"
import {App} from "ionic-angular"

import {SensorSettingsHttp} from "./sensor-settings.http";
import {SensorSettingsDetailsComponent} from "./sensor-settings-details/sensor-settings-details.component"
import {PassDataService} from "./sensor-settings.service"

@Component({
  selector: 'sensor-settings',
  templateUrl: './sensor-settings.component.html'
})
export class SensorSettingsComponent implements OnInit {
  sensorSettingsItems: any = []; // 传感器设置列表数据

  constructor(
    public sensorSettingsHttp: SensorSettingsHttp,
    public appCtrl: App,
    public passDataService: PassDataService
  ) {

  }

  ngOnInit() {
    this.querySensorSettingsList();
  }

  // 点击跳转详情
  public gotoDetails(item) {
    this.appCtrl.getRootNav().push(SensorSettingsDetailsComponent);
    this.passDataService.sensorItem = item;
  }

  // 跳转到搜索页面
  public gotoSearch(): any {

  }

  // 查询传感器设置列表的方法
  private querySensorSettingsList(): any {
    this.sensorSettingsHttp
      .querySensorSettingsList()
      .subscribe(res => {
        this.sensorSettingsItems = res.code === 200 ? res.rows : [];

      });
  }

}
