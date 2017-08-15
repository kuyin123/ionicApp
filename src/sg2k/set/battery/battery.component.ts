/*
* 电量统计页面的业务逻辑
* by q1cha0
* */
import {Component, OnInit} from "@angular/core"
import {App} from "ionic-angular"

import {BatteryHttp} from "./battery.http"
import {SearchComponent} from "../../search/serach.component"

@Component({
  selector: 'page-battery',
  templateUrl: './battery.component.html'
})
export class BatteryComponent implements OnInit {
  batteryItems: Array<any> = []; // 电量统计列表数据
  scrollBatteryItems: Array<any> = []; // 下拉刷新时被实时替换的数据
  curPage: number = 1; // 记录当前页码
  totalPage: number = 0; // 总页数
  ifBottom: boolean = false; // 当前页是否是最后一页

  constructor(public batteryHttp: BatteryHttp,
              public appCtrl: App) {
    // debugger
  }

  // 组件初始化执行的方法
  ngOnInit() {
    this.queryBatteryList();
  }

  // 点击搜索框跳转到搜索页面
  public gotoSearch(): void {
    this.appCtrl.getRootNav().push(SearchComponent);
  }

  // 上拉加载
  public doInfinite(infiniteScroll): any {
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
      let scrollArr = this.scrollBatteryItems;
      this.batteryItems.push(...scrollArr);
      infiniteScroll.complete();
    }, 500);
  }

  // 下拉刷新
  public doRefresh(refresher): void {
    // 将当前页固定至第一页
    this.curPage = 1;
    this.batteryHttp.params.currentPage = this.curPage;
    this.queryBatteryList();
    setTimeout(() => {
      refresher.complete();
    }, 800);
  }

  // 通过服务请求列表数据的方法
  private queryBatteryList(): any {
    this.batteryHttp
      .queryBatteryList()
      .subscribe(res => {
        this.batteryItems = res.code === 200 ? res.rows : [];
        // 获取总页数, scroll的判断值
        this.totalPage = res.totalPage;
      });
  }

  // 上拉刷新时, 通过服务请求的数据
  private queryBatteryListForScroll(): any {
    this.ifBottom = false;
    this.batteryHttp
      .queryBatteryList()
      .subscribe(res => {
        this.scrollBatteryItems = res.code === 200 ? res.rows : [];
      });
  }

}
