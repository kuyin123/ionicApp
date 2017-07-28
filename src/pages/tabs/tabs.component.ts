import { Component,ViewChild} from '@angular/core';
import { Tabs } from 'ionic-angular';

import { CommunityComponent } from '../community/community.component';
import { ServiceComponent } from '../service/service.component';
import { MineComponent } from '../mine/mine.component';

@Component({
  templateUrl: './tabs.component.html'
})
export class TabsComponent {
  @ViewChild('myTabs') tabRef: Tabs;

  tab1Root = CommunityComponent;
  tab2Root = ServiceComponent;
  tab3Root = MineComponent;
  mySelectedIndex = 1;

  constructor() {
    //this.mySelectedIndex = navParams.data.tabIndex || 2;
  }

  ionViewDidEnter() {
    this.tabRef.select(1);
   // let navParms = this.navparams;
  }
}
