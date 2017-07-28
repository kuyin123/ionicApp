import {Component,ViewChild,OnInit} from '@angular/core';
import { EChartOption,EchartsNg2Component } from 'echarts-ng2';
import { SearchHttp } from './search.http'

@Component({
  selector: 'search-cmp',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{
  pumpItems;
  constructor(private searchHttp:SearchHttp) {
  }

  ngOnInit(){
    this.getItems("");
  };

  getItems(test){
    this.searchHttp.queryALLPumpList().subscribe(res => {
        let resData = res;
        this.pumpItems = res.rows;
    });
    test && test.setFocus();
  }

  doRefresh(refresher){
    setTimeout(() => {
       console.log('Async operation has ended');
       refresher.complete();
     }, 2000);
  }

  doInfinite(infiniteScroll){
    setTimeout(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
