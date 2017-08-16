/* 
* 扫一扫进入传感器配置页面，有三种状态，未配置/待配置/已配置。
* 传感器未配置/待配置页面
* */

import { Component } from "@angular/core"

@Component({
  selector: 'sensor-settings-config',
  templateUrl: './sensor-settings-config.component.html',
})

export class SensorSettingsConfigComponent {
  //sensorId: number = 123456
  sensorInfo: { id?: number, name?: string, position?: string, angle?: string, alarmTemperature?: string, alarmLevel?: string } = {}
  constructor() { 
    this.sensorInfo.id=111
   }
}