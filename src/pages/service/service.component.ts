import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { SG2KComponent } from '../../sg2k/sg2k.component';

@Component({
  selector: 'page-contact',
  templateUrl: './service.component.html'
})
export class ServiceComponent {

  constructor(public navCtrl: NavController,
              public appCtrl: App) {

  }

  goToSys(type:string):void{
    // this.service.getData().subscribe(res => {
    //   let a = res;
    // })
    switch(type){
      case '2k':
        //this.navCtrl.push(Index);
        // this.navCtrl.push(TabsPage,{
        //   name:"ddd"
        // });
        //let viewCtrl = this.viewCtrl;
         this.appCtrl.getRootNav().push(SG2KComponent);
        break;
    }
  }

}
