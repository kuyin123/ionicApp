/*
* 传感器设置的逻辑层
* */
import {Component, OnInit} from "@angular/core"
import {App} from "ionic-angular"

@Component({
  selector: 'sensor-settings',
  templateUrl: './sensor-settings.component.html'
})
export class SensorSettingsComponent implements OnInit {


  constructor(public appCtrl: App,) {

  }

  ngOnInit() {

  }

  public gotoSearch(): any {

  }

}
