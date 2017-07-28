import { Component } from '@angular/core';
import { App } from 'ionic-angular';

import {HttpService} from "../../providers/HttpService";
import {Service} from "./service";

@Component({
  selector: 'page-about',
  templateUrl: './community.component.html'
})
export class CommunityComponent {

  constructor(public appCtrl: App,
              private httpService:HttpService,
              private service:Service) {}

  goToSys(type:string):void{
    this.service.getData().subscribe(res => {
      let a = res;
    })
    switch(type){
      case '2k':
        //this.navCtrl.push(Index);
        // this.navCtrl.push(TabsPage,{
        //   name:"ddd"
        // });
        //let viewCtrl = this.viewCtrl;
       // this.appCtrl.getRootNav().push(SG2KComponent);
        break;
    }
  }
}
