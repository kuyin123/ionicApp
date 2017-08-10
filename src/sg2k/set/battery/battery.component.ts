/*
* 电量统计页面的业务逻辑
* by q1cha0
* */
import {
  Component, OnInit, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList,
  AfterViewChecked
} from "@angular/core"

import {BatteryHttp} from "./battery.http"

@Component({
  selector: 'page-battery',
  templateUrl: './battery.component.html'
})
export class BatteryComponent implements
  OnInit, AfterViewInit, AfterViewChecked {
  batteryItems: Array<any> = []; // 电量统计列表数据
  stateInfo: string = "离线"; // 电量旁显示的状态信息值
  batteryVal: number = 0; // 电量的数值

  scrollAlarmItems: Array<any> = []; // 下拉刷新时被实时替换的数据
  curPage: number = 1; // 记录当前页码
  totalPage: number = 0; // 总页数
  ifBottom:boolean = false; // 当前页是否是最后一页

  @ViewChildren('batteryWrapper') batteryWrapper;
  @ViewChildren('batteryInfo') batteryInfo: QueryList<ElementRef>;
  @ViewChildren('batteryBody') batteryBody: QueryList<ElementRef>;
  @ViewChildren('batteryHeader') batteryHeader: QueryList<ElementRef>;
  @ViewChild('aaa') aaa: ElementRef;

  constructor(
    public batteryHttp: BatteryHttp,
    public elementRef: ElementRef
  ) {
    console.log(elementRef.nativeElement);
    // debugger
  }

  // 组件初始化执行的方法
  ngOnInit() {
    this.queryBatteryList();
  }

  // 初始化完组件视图及其子视图之后调用。第一次ngAfterContentChecked()之后调用，只调用一次。
  ngAfterViewInit() {
    this.aaa
    this.batteryBody
    this.elementRef.nativeElement.querySelector('.battery_wrapper');
    // debugger
  }
  ngAfterViewChecked() {
    this.aaa;
  }

  // 电量动态变化设置的方法
  setBatteryVal() {
    let val: number = this.batteryVal,
      info: string = "离线",
      _batteryInfo: any = this.batteryInfo,
      _batteryHeader: any = this.batteryHeader,
      _batteryBody: any = this.batteryBody,
      _batteryWrapper: any = this.batteryWrapper,
      color: string = '#ACACAC';
    if (val <= 0) {
      info = "离线";
      color = '#ACACAC';
    } else if (val <= 30) {
      info = val + "%";
      color = '#F24949';
    } else if (val > 30) {
      info = val + "%";
      color = '#43BF6C';
    }
    _batteryWrapper.style.borderColor = color;
    _batteryHeader.style.backgroundColor = color;
    _batteryBody.style.backgroundColor = color;
    _batteryInfo.style.color = color;

    _batteryBody.style.width = val <= 0 ? "0px" : info;
    this.stateInfo = info;
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
