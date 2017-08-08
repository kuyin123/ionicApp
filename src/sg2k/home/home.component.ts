import { Component, ViewChild, OnInit } from '@angular/core';
import { EChartOption, ECharts } from 'echarts-ng2';
import { HomeHttp } from './home.http'
import { Option } from './option'
import { dateHandler } from 'sgck'

@Component({
  selector: 'home-cmp',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private homeHttp: HomeHttp) {}

  timesel = "1" //选择时间类型：前一天，前一周，前一月，前一年，自定义。默认前一天
  curDate = dateHandler.dateFormat(new Date(), 'yyyy-MM-dd'); //当前时间
  preDate = dateHandler.dateFormat(dateHandler.prevDay(new Date()), 'yyyy-MM-dd'); //前推的时间
  pet = "0"; //实时数据：0，状态变化：1

  colorForRel = ['#F24949', '#f7ba2a', '#ABE235', '#11b95c', '#dcdcdc']; //实时机泵饼图分块颜色
  colorForHis = ['#F25589', '#D321ff', '#3CA0C6']; //历史机泵饼图分块颜色
  colorNoData = ['#dcdcdc']; //无数据饼图颜色

  pieData: any //饼状图显示配置
  showData: any[] = [] //显示数据

  maxDate: string = this.curDate; //禁止选择今天之后的时间

  //根据实时数据和状态变化，动态改变显示标题
  get title(): string {
    return this.pet == '0' ? '实时机泵状态统计' : '历史机泵状态变化统计'
  }
  /*
   * 实时机泵统计
   * */
  countRTPumpStatus() {
    //console.log('实时机泵统计')
    this.homeHttp.countRTPumpStatus().subscribe(res => {
      let optData, toalData, bgColor,
        resData = res.data;
      if (resData && resData.total != 0) {
        optData = resData.rows;
        toalData = [{ value: resData.total, name: '机泵台数' }];
        bgColor = this.colorForRel;
      } else {
        optData = [];
        bgColor = this.colorNoData;
        toalData = [{ value: 0, name: '全部' }];
      }
      this.showData = optData;
      this.pieData = Option.getOpt(optData, toalData, bgColor);
    });
  };
  /*
   * 历史机泵状态变化统计
   * */
  countHisPumpStatus(stime, etime) {
    //console.log('历史机泵状态变化统计')
    this.homeHttp.countHisPumpStatus(stime, etime).subscribe(res => {
      let optData, toalData, bgColor,
        resData = res.data;
      if (resData) {
        optData = resData.rows;
        toalData = [{ value: resData.total, name: '机泵变化总数' }];
        bgColor = this.colorForHis;
      } else {
        optData = [];
        bgColor = this.colorNoData;
        toalData = [{ value: 0, name: '机泵变化总数' }];
      }
      this.showData = optData;
      this.pieData = Option.getOpt(optData, toalData, bgColor);

    });
  }

  customDate(): void {
    this.countHisPumpStatus(this.preDate, this.curDate)
  }

  segmentChanged(e): void {
    if (e.value == 0) {
      this.countRTPumpStatus()
    } else {
      this.customDate()
    }
  }

  userSelectDate(e): void {
    let type: string = e.value

    let _preDate: string;
    let _curDate: object = new Date();
    switch (type) {
      case "1":
        _preDate = dateHandler.prevDay(_curDate);
        break;
      case "2":
        _preDate = dateHandler.prevWeek(_curDate);
        break;
      case "3":
        _preDate = dateHandler.prevMonth(_curDate);
        break;
      case "4":
        _preDate = dateHandler.prevYear(_curDate);
        break;
      default:
        _preDate = dateHandler.prevDay(_curDate);
        break;
    }
    this.preDate = dateHandler.dateFormat(_preDate, 'yyyy-MM-dd');
    if (type != '0') {
      this.customDate()
    }
  }

  doRefresh(refresher) {
    //console.log('Begin async operation', refresher);

    setTimeout(() => {
      //console.log('Async operation has ended');
      console.log(this)
      refresher.complete();
    }, 2000);
  }


  ngOnInit() {
    this.countRTPumpStatus(); //初始化请求实时机泵
  };

}
