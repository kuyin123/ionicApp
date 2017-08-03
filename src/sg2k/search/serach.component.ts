import {Component, ViewChild, OnInit} from '@angular/core';
import {EChartOption, EchartsNg2Component} from 'echarts-ng2';
import {NavController, Searchbar} from "ionic-angular"

import {SearchHttp} from './search.http'

@Component({
  selector: 'search-cmp',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  pumpItems;

  @ViewChild('searchBar') searchbar: Searchbar;

  constructor(
    private searchHttp: SearchHttp,
    private navCtrl: NavController
  ) {


  }
  ionViewDidEnter() {
    // debugger;
    setTimeout(() => {
      //Keyboard.show();
      this.searchbar.setFocus();
    }, 50);
  }

  ngOnInit() {
    this.getItems("");
  };

  // 点击搜索的取消按钮
  onCancel() {
    this.navCtrl.pop();
  }

  getItems(test) {
    this.searchHttp.queryALLPumpList().subscribe(res => {
      let resData = res;
      this.pumpItems = res.rows;
    });
    // test && test.setFocus();
  }

  doRefresh(refresher) {
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
