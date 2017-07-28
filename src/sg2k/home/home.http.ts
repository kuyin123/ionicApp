import {Injectable} from "@angular/core";
import {Response,Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {HttpService} from "../../providers/HttpService"

@Injectable()
export class HomeHttp {
  constructor(public httpService:HttpService){}
  //实时机泵状态统计接口
  private countRTPumpURL:string = 'sg2k/Show/countRTPumpStatus.do';
  private conuntHisPumpURL:string = 'sg2k/Show/countHISChangePumpStatus.do'

  countRTPumpStatus(){
    return this.httpService.post(this.countRTPumpURL,{isFirst:0}).map((res: Response) => res.json());
  };

  countHisPumpStatus(stime,etime){
    let parms = {
      startTime: new Date(stime).getTime() + '',
      endTime: new Date(etime).getTime() + '',
      startDate: stime,
      endDate: etime
    }
    return this.httpService.post(this.conuntHisPumpURL,{parms:0}).map((res: Response) => res.json());
  }
}
