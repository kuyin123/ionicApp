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
  scrollAlarmItems: Array<any> = []; // 下拉刷新时被实时替换的数据
  curPage: number = 1; // 记录当前页码
  totalPage: number = 0; // 总页数
  ifBottom: boolean = false; // 当前页是否是最后一页

  constructor(public batteryHttp: BatteryHttp,) {
    // debugger
  }

  // 组件初始化执行的方法
  ngOnInit() {
    this.queryBatteryList();
  }

  // 通过服务请求列表数据的方法
  queryBatteryList(): any {
    this.batteryHttp
      .queryBatteryList()
      .subscribe(res => {
        this.batteryItems = res.code === 200 ? res.rows : [];
        // 获取总页数, scroll的判断值
        this.totalPage = res.totalPage;
      });
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
    this.batteryHttp.params.currentPage = this.curPage;
    this.queryBatteryListForScroll();

    // 将scroll请求的数据塞入列表数组中
    setTimeout(() => {
      let scrollArr = this.scrollAlarmItems;
      this.batteryItems.push(...scrollArr);
      infiniteScroll.complete();
    }, 500);
  }

  // 下拉刷新
  doRefresh(refresher) {
    // 将当前页固定至第一页
    this.curPage = 1;
    this.batteryHttp.params.currentPage = this.curPage;
    this.queryBatteryList();
    setTimeout(() => {
      refresher.complete();
    }, 800);
  }

  // 上拉刷新时, 通过服务请求的数据
  queryBatteryListForScroll(): any {
    this.ifBottom = false;
    this.batteryHttp
      .queryBatteryList()
      .subscribe(res => {
        this.scrollAlarmItems = res.code === 200 ? res.rows : [];
      });
  }

}
