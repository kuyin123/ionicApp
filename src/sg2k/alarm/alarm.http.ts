import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {HttpService} from "../../providers/HttpService"

@Injectable()
export class AlarmHttp {
  constructor(public httpService: HttpService) {
  }

  params = {
    q: null,
    currentPage: 1,
    rows: 15,
    nopage: 0,
    orderbyField: '',
    status: -1
  };
  // 机泵报警列表接口
  private alarmListURL: string = 'sg2k/LogShow/pumpAlarm.do';

  queryPumpAlarmList() {
    return this.httpService
      .post(
        this.alarmListURL,
        this.params
      ).map((res: Response) => res.json());
  };

}
