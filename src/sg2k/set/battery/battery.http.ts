/*
* 电量统计的数据请求 Service 服务
* by q1cha0
* */
import {Injectable} from "@angular/core"
import {Response} from "@angular/http"
import {HttpService} from "../../../providers/HttpService"

@Injectable()
export class BatteryHttp {
  params = {
    q: null,
    currentPage: 1,
    rows: 15,
    nopage: 0,
    orderbyField: '',
  }
  batteryListURL: string = 'sg2k/LogShow /batteryStatus.do';
  constructor(
    public httpService: HttpService,
  ) {

  }

  queryBatteryList() {
    return this.httpService
      .post(
        this.batteryListURL,
        this.params
      ).map((res: Response) => res.json());
  };

}
