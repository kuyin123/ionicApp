import {Injectable} from "@angular/core";
import {Response,Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {HttpService} from "../../providers/HttpService"

@Injectable()
export class SearchHttp {
  constructor(public httpService:HttpService){}
  params = {
    status: 1,
    q: '',
    currentPage: 1,
    rows: 20,
    nopage: 0,
    sign: "",
    preRoute: ""
  };
  //实时机泵状态统计接口
  private pumpListURL:string = 'sg2k/Show/queryALLPumpList.do';

  queryALLPumpList(){
    return this.httpService.post(this.pumpListURL,this.params).map((res: Response) => res.json());
  };

}
