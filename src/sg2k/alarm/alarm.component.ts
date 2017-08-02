import {Component, OnInit} from '@angular/core';
import {AlarmHttp} from './alarm.http'

@Component({
  selector: 'page-home',
  templateUrl: './alarm.component.html'
})
export class AlarmComponent implements OnInit {
  type: string = "-1"; // 下拉框的选择类型
  alarmItems: Array<any> = []; // 报警列表的所有数据
  scrollAlarmItems: Array<any> = []; // 下拉刷新时被实时替换的数据

  constructor(public alarmHttp: AlarmHttp,) {
    // 上拉加载...
    for (let i = 0; i < 5; i++) {
      this.alarmItems.push(this.alarmItems.length);

    }
  }

  ngOnInit() {
    this.queryPumpAlarmList();
  };

  // 下拉框有变更时, 重新请求数据
  onSelectChange(selectedValue: any): void {
    this.alarmHttp.params.status = selectedValue;
    this.queryPumpAlarmList();
  }

  // 上拉加载
  doInfinite(infiniteScroll) {
    // console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.alarmItems.push(this.alarmItems.length);
      }

      // console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1500);
  }

  // 查询机泵报警数据函数
  queryPumpAlarmList(): any {
    this.alarmHttp
      .queryPumpAlarmList()
      .subscribe(res => {
        this.alarmItems = res.code === 200 ? res.rows : [];
      });
  }

  // 下拉刷新的时候, 发起的数据请求
  queryPumpAlarmListForScroll(): any {
    this.alarmHttp
      .queryPumpAlarmList()
      .subscribe(res => {
        this.scrollAlarmItems = res.code === 200 ? res.rows : [];
      });
  }

}
