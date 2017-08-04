/**
 * 数据请求服务
 * by gouxiaojun 2017 08.4
 */
import { Injectable } from "@angular/core";
import { Response} from "@angular/http";
import 'rxjs/add/operator/map';
import { HttpService } from "../../providers/HttpService"

@Injectable()
export class SearchHttp {
  constructor(public httpService: HttpService) { }
  //请求参数
  params = {
    status: 1,
    q: '',
    currentPage: 1,
    rows: 15,
    nopage: 0,
    sign: "",
    preRoute: ""
  };
  //实时机泵状态统计接口
  private pumpListURL: string = 'sg2k/Show/queryALLPumpList.do';
  //请求数据方法
  queryALLPumpList() {
    return this.httpService.post(this.pumpListURL, this.params).map((res: Response) => res.json());
  };

}
