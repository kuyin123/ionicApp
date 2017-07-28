import {Component, OnInit} from '@angular/core';
import { AlarmHttp } from './alarm.http'

@Component({
  selector: 'page-home',
  templateUrl: './alarm.component.html'
})
export class AlarmComponent implements OnInit{
  type="0";
  alarmItems=[];
  constructor(public alarmHttp:AlarmHttp) {
  }

  ngOnInit(){
    this.queryPumpAlarmList();
  };

  queryPumpAlarmList(){
    this.alarmHttp.queryPumpAlarmList().subscribe(res => {
       this.alarmItems = res.code == 200?res.rows:[];
    });
  }
}
