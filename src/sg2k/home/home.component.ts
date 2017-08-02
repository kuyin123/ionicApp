import {Component,ViewChild,OnInit} from '@angular/core';
import { EChartOption,EchartsNg2Component } from 'echarts-ng2';
import { HomeHttp } from './home.http'
import { Option } from './option'
import { dateHandler } from 'sgck'

@Component({
  selector: 'home-cmp',
  templateUrl: './home.component.html',
 // styleUrls:['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private homeHttp:HomeHttp) {
  }
  //选择时间类型：前一天，前一周，前一月，前一年，自定义。默认前一天
  private _timesel = "1";
  curDate;//当前时间
  preDate;//后推的时间
  pet = "0";//实时数据：0，状态变化：1
  relOpt:EChartOption;//实时机泵饼图配置
  hisOpt:EChartOption;//历史机泵状态变化饼图配置
  colorForRel = ['#F24949', '#f7ba2a', '#ABE235', '#11b95c', '#dcdcdc'];//实时机泵饼图分块颜色
  colorForHis = ['#F25589', '#D321ff', '#3CA0C6'];//历史机泵饼图分块颜色
  colorNoData = ['#dcdcdc'];//无数据饼图颜色
  relData:any[] = [];//实时数据
  hisData:any[] = [];//历史数据

  maxDay:string = dateHandler.dateFormat(new Date(),'yyyy-MM-dd');

  //根据实时数据和状态变化，动态改变显示标题
  get title():string{
    return this.pet=='0'?'实时机泵状态统计':'历史机泵状态变化统计'
  }
  /*
  * 选择时间类型
  * */
  set timesel(timesel){
    this._timesel = timesel;
    let timeType = Number(timesel);
    let preDate:any;
    let curDate = new Date();
    switch(timeType){
      case 1:
        preDate = dateHandler.prevDay(curDate);
        break;
      case 2:
        preDate = dateHandler.prevWeek(curDate);
        break;
      case 3:
        preDate = dateHandler.prevMonth(curDate);
        break;
      case 4:
        preDate = dateHandler.prevYear(curDate);
        break;
      default:
        preDate = dateHandler.prevDay(curDate);
        break;
    }
    this.preDate = dateHandler.dateFormat(preDate,'yyyy-MM-dd');
    this.curDate = dateHandler.dateFormat(curDate,'yyyy-MM-dd');
    if(timesel != '0'){
    this.countHisPumpStatus(preDate,curDate);
    }
  };

  get timesel(){
    return this._timesel;
  };

  ngOnInit(){
    
    this.timesel = "1";//默认选择前一天
    this.countRTPumpStatus();//初始化请求实时机泵
  };
  /*
  * 实时机泵统计
  * */
  countRTPumpStatus(){
    this.homeHttp.countRTPumpStatus().subscribe(res => {
      let optData,toalData,bgColor,
        resData = res.data;
      if(resData && resData.total != 0){
        optData = resData.rows;
        toalData = [{value:resData.total,name:'机泵台数'}];
        bgColor = this.colorForRel;
      }else{
        optData = [];
        bgColor = this.colorNoData;
        toalData = [{value:0,name:'全部'}];
      }
      this.relData = optData;
      this.relOpt = Option.getOpt(optData,toalData,bgColor);
    });
  };
  /*
  * 历史机泵状态变化统计
  * */
  countHisPumpStatus(stime,etime){
    this.homeHttp.countHisPumpStatus(stime,etime).subscribe(res => {
      let optData,toalData,bgColor,
        resData = res.data;
      if(resData){
        optData = resData.rows;
        toalData = [{value:resData.total,name:'机泵变化总数'}];
        bgColor = this.colorForHis;
      }else{
        optData = [];
        bgColor = this.colorNoData;
        toalData = [{value:0,name:'机泵变化总数'}];
      }
      this.hisData = optData;
      this.hisOpt = Option.getOpt(optData,toalData,bgColor);

    });
  }

  customDate():void{
    this.countHisPumpStatus(this.preDate,this.curDate)
  }

}
