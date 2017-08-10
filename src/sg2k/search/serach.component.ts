/**
 * 机泵查询列表
 * by gouxiaojun 2017 08.4
 */

import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, Searchbar } from "ionic-angular"
import { SearchHttp } from './search.http'

@Component({
  selector: 'search-cmp',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  private pumpItems: any[];//数据列表
  private scrollPumpItems: Array<any> = []; // 下拉刷新时数据
  private curPage: number = 1; // 记录当前页数
  private totalPage: number = 0; // 总页数

  @ViewChild('searchBar') searchbar: Searchbar;

  constructor(
    private searchHttp: SearchHttp,
    public navCtrl: NavController
  ) { }

  //初始化获取数据
  ngOnInit() {
    this.getItems(this.searchbar);
  };

  //点击搜索的取消按钮
  onCancel() {
    this.navCtrl.pop();
  }
  //初始化数据及焦点
  getItems(item) {
    let val = item ? item.value : '';
    this.searchHttp.params.currentPage =1;
    this.searchHttp.params.q = val;
    this.searchHttp
      .queryALLPumpList()
      .subscribe(res => {
      this.pumpItems = res.code === 200 ? res.rows : [];
      this.totalPage = res.totalPage;
      setTimeout(() => {
        item && item.setFocus();
      }, 666);
    });
  }

  //下拉刷新
  doRefresh(refresher) {
    this.curPage = 1;
    this.getItems(this.searchbar);
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }
  //上拉获取数据
  doInfinite(infiniteScroll) {
    // 页码超过总页数, 直接跳出方法
    if (this.curPage >= this.totalPage) {
      infiniteScroll.complete();
      return false;
    }
    ++this.curPage;
    this.searchHttp.params.currentPage = this.curPage;
    this.queryPumpItemsForScroll();

    setTimeout(() => {
      this.pumpItems.push(...this.scrollPumpItems);
      infiniteScroll.complete();
    }, 500);
  }
  // 上拉的时候, 发起的数据请求
  queryPumpItemsForScroll(): any {
    this.searchHttp
      .queryALLPumpList()
      .subscribe(res => {
      this.scrollPumpItems = res.code === 200 ? res.rows : [];
    });
  }
}
