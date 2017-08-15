/*
* 传感器设置点击后详情的请求数据服务 service
* */
import {Injectable} from "@angular/core"
import {Response} from "@angular/http"
import {HttpService} from "../../../../providers/HttpService"

@Injectable()
export class SensorSettingsDetailsHttp {
  params = {
    q: null,
    currentPage: 1,
    rows: 15,
    nopage: 0,
    conditions: 1,
  }
  sensorSettingsDetailsURL: string = 'sg2k/';

  constructor(public httpService: HttpService) {

  }

  public querySensorSettingsDetails(): any {
    return this.httpService
      .post(
        this.sensorSettingsDetailsURL,
        this.params
      ).map((res: Response) => res.json());
  };

}
