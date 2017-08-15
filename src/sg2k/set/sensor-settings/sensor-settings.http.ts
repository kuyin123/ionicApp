/*
* 传感器设置请求数据服务 service
* */
import {Injectable} from "@angular/core"
import {Response} from "@angular/http"
import {HttpService} from "../../../providers/HttpService"

@Injectable()
export class SensorSettingsHttp {
  params = {
    q: null,
    currentPage: 1,
    rows: 15,
    nopage: 0,
    conditions: 1,
  }
  sensorSettingsListURL: string = 'sg2k/';

  constructor(public httpService: HttpService) {

  }

  public querySensorSettingsList(): any {
    return this.httpService
      .post(
        this.sensorSettingsListURL,
        this.params
      ).map((res: Response) => res.json());
  };

}
