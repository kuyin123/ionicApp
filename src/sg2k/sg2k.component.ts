import { Component,OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { EChartOption } from 'echarts-ng2';
import { TabsSg2kComponent } from './tabs/tabs-sg2k.component';

@Component({
  selector: 'sg2k-page',
  templateUrl: './sg2k.component.html'
})
export class SG2KComponent implements OnInit{
  rootPage = TabsSg2kComponent;
  constructor(public navCtrl: NavController,private navParams:NavParams) {
    let name = this.navParams.get("navParams");
  }

  ngOnInit() {
  }

}
