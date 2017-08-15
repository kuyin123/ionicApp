/*
* 机泵数据列表的数据请求 服务
* by q1cha0
* */
import {Injectable} from "@angular/core"
import {Response} from "@angular/http"
import {HttpService} from "../../../providers/HttpService"

@Injectable()
export class PumpDataListHttp {
  params = {
    q: null,
    currentPage: 1,
    rows: 15,
    nopage: 0,
    conditions: 1,
  }
  pumpDataListURL: string = 'sg2k/Show/queryLastData.do';

  constructor(public httpService: HttpService) {

  }

  public queryPumpDataList(): any {
    return this.httpService
      .post(
        this.pumpDataListURL,
        this.params
      ).map((res: Response) => res.json());
  };

}
