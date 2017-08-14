/*
* 报警页面的业务逻辑
* by q1cha0
* */
import {Component, OnInit} from '@angular/core'
import {NavController, App} from "ionic-angular"

import {AlarmHttp} from './alarm.http'
import {SearchComponent} from "../search/serach.component"

@Component({
  selector: 'page-alarm',
  templateUrl: './alarm.component.html'
})
export class AlarmComponent implements OnInit {
  type: string = "-1"; // 下拉框的选择类型
  alarmItems: Array<any> = []; // 报警列表的所有数据
  scrollAlarmItems: Array<any> = []; // 下拉刷新时被实时替换的数据
  curPage: number = 1; // 记录当前页码
  totalPage: number = 0; // 总页数
  ifBottom: boolean = false; // 当前页是否是最后一页
  pushPage: any; // 通过属性绑定导航

  constructor(public alarmHttp: AlarmHttp,
              public navCtrl: NavController,
              public appCtrl: App) {
    // this.pushPage = SearchComponent;
  }

  ngOnInit() {
    this.queryPumpAlarmList();
  };

  // 点击输入框跳转到搜索页面的另一种方法
  openSearchPage() {
    this.navCtrl.push(SearchComponent);
  }
  public gotoSearch() {
    this.appCtrl.getRootNav().push(SearchComponent);
  }

  // select框有变更时, 重新请求数据
  public onSelectChange(selectedValue: any): void {
    this.curPage = 1;
    this.alarmHttp.params.currentPage = this.curPage;
    this.alarmHttp.params.status = selectedValue;
    this.queryPumpAlarmList();
  }

  // 上拉加载
  public doInfinite(infiniteScroll) {
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
  public doRefresh(refresher) {
    // 将当前页固定至第一页
    this.curPage = 1;
    this.alarmHttp.params.currentPage = this.curPage;
    this.queryPumpAlarmList();
    setTimeout(() => {
      refresher.complete();
    }, 800);
  }

  // 查询机泵报警数据函数
  private queryPumpAlarmList(): any {
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
  private queryPumpAlarmListForScroll(): any {
    this.ifBottom = false;
    this.alarmHttp
      .queryPumpAlarmList()
      .subscribe(res => {
        this.scrollAlarmItems = res.code === 200 ? res.rows : [];
      });
  }
}
