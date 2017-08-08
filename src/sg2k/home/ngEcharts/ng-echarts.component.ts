import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

import * as echarts from 'echarts';

@Component({
  selector: 'ng-echarts',
  template: '<div #host auto-fit-layout></div>'
})
export class NgEchartsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('host') host: ElementRef;

  private chart
  option: any = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  }

  constructor(private el: ElementRef) {}

  init() {
    if (!this.chart) {
      //this.ngZone.runOutsideAngular(() => {
      //this.onBeforeInit.emit();
      this.chart = < any > (echarts.init(this.host.nativeElement));
      this.chart.setOption(this.option);
      console.log(this.option)
      //this.onAfterInit.emit();
      //this.option && this.chart.setOption(this.option);
      /*this.setGroup();*/
      //});
    } else {
      //this.option && this.chart.setOption(this.option);
    }
  }

  ngAfterViewInit() {
  	this.init()
  }
  ngOnDestroy() {}
}
