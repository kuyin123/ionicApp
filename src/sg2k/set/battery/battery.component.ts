/*
* 电量统计页面的业务逻辑
* by q1cha0
* */
import {Component, OnInit} from "@angular/core"

import {BatteryHttp} from "./battery.http"

@Component({
  selector: 'page-battery',
  templateUrl: './battery.component.html'
})
export class BatteryComponent implements OnInit {
  batteryItems: Array<any> = []; // 电量统计列表数据

  constructor(
    public batteryHttp: BatteryHttp
  ) {

  }

  ngOnInit() {
    this.queryBatteryList();
  }

  queryBatteryList(): any {
    this.batteryHttp
      .queryBatteryList()
      .subscribe(res => {
        this.batteryItems = res.code === 200 ? res.rows : [];
      });
  }

}
