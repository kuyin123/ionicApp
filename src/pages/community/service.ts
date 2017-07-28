import {Injectable} from "@angular/core";
import {Response,Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {HttpService} from "../../providers/HttpService"

@Injectable()
export class Service {
  constructor(public httpService:HttpService){}

  getData(){
   // private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let rootUrl = 'sg2k/Show/queryALLPumpList.do';
    let params:any = {
        status: 1,
        q: '',
        currentPage: 1,
        rows: 20,
        nopage: 0,
        sign: "",
        preRoute: ""
      };
    return this.httpService.post(rootUrl,params).map((res: Response) => res.json());
  }
}
