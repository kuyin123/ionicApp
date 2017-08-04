import {Component, OnInit} from '@angular/core';
import {NavController} from "ionic-angular"

import {AlarmHttp} from './alarm.http'
import {SearchComponent} from "../search/serach.component"

@Component({
  selector: 'page-home',
  templateUrl: './alarm.component.html'
})
export class AlarmComponent implements OnInit {
  type: string = "-1"; // 下拉框的选择类型
  alarmItems: Array<any> = []; // 报警列表的所有数据
  scrollAlarmItems: Array<any> = []; // 下拉刷新时被实时替换的数据
  curPage: number = 1; // 记录当前页码
  totalPage: number = 0; // 总页数
  ifBottom:boolean = false; // 当前页是否是最后一页
  searchVal: string = ''; // 页面内搜索值
  pushPage: any; // 通过属性绑定导航

  constructor(
    public alarmHttp: AlarmHttp,
    public navCtrl: NavController
  ) {
    this.pushPage = SearchComponent;
  }

  ngOnInit() {
    this.queryPumpAlarmList();
  };

  // 点击搜索框的时候, 打开搜索页面
  openSearchPage() {
    this.navCtrl.push(SearchComponent);
  }

  // select框有变更时, 重新请求数据
  onSelectChange(selectedValue: any): void {
    this.curPage = 1;
    this.alarmHttp.params.currentPage = this.curPage;
    this.alarmHttp.params.status = selectedValue;
    this.queryPumpAlarmList();
  }

  // 页面内搜索功能
  filterItems(evt: any) {
  //   let val = this.searchVal;
  //   this.alarmHttp.params.q = val;
  //   this.alarmHttp.queryPumpAlarmList();
  }

  // 上拉加载
  doInfinite(infiniteScroll) {
    // 页码超过总页数, 直接跳出方法
    if (this.curPage >= this.totalPage) {
      infiniteScroll.complete();
      this.ifBottom = true;
      return false;
    }
    ++this.curPage;

    // 改变请求的参数, 同时发起滚屏的数据请求
    this.alarmHttp.params.currentPage = this.curPage;
    this.queryPumpAlarmListForScroll();

    // 将scroll请求的数据塞入列表数组中
    setTimeout(() => {
      let scrollArr = this.scrollAlarmItems;
      this.alarmItems.push(...scrollArr);
      infiniteScroll.complete();
    }, 500);
  }

  // 下拉刷新
  doRefresh(refresher) {
    // 将当前页固定至第一页
    this.curPage = 1;
    this.alarmHttp.params.currentPage = this.curPage;
    this.queryPumpAlarmList();
    setTimeout(() => {
      refresher.complete();
    }, 800);
  }

  // 查询机泵报警数据函数
  queryPumpAlarmList(): any {
    this.ifBottom = false;
    this.alarmHttp
      .queryPumpAlarmList()
      .subscribe(res => {
        this.alarmItems = res.code === 200 ? res.rows : [];
        // 获取总页数, scroll的判断值
        this.totalPage = res.totalPage;
      });
  }

  // 上拉的时候, 发起的数据请求
  queryPumpAlarmListForScroll(): any {
    this.ifBottom = false;
    this.alarmHttp
      .queryPumpAlarmList()
      .subscribe(res => {
        this.scrollAlarmItems = res.code === 200 ? res.rows : [];
      });
  }
}
