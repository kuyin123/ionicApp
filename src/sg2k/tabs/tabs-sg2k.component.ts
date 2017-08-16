import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomeComponent } from '../home/home.component';
import { AlarmComponent } from '../alarm/alarm.component';
import { SetComponent } from '../set/set.component';
import { SearchComponent } from './../search/serach.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { SensorSettingsConfigComponent } from '../set/sensor-settings/sensor-settings-config/sensor-settings-config.component'

@Component({
  selector: 'tabs-sg2k',
  templateUrl: './tabs-sg2k.component.html'
})
export class TabsSg2kComponent {
  // @ViewChild('myTabs') tabRef: Tabs;

  tab1Root = HomeComponent;
  tab2Root = AlarmComponent;
  tab3Root = SetComponent;
  mySelectedIndex = 0;

  constructor(public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner) {
    //this.mySelectedIndex = navParams.data.tabIndex || 2;
  }

  ionViewDidEnter() {
    //this.tabRef.select(0);
    // let navParms = this.navparams;
  }

  /*机泵搜索*/
  onSearch() {
    this.navCtrl.push(SearchComponent);
  }

  onScan(): void {
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      alert(barcodeData)
    }, (err) => {
      // An error occurred
    });
  }

  addSensor() {
    this.navCtrl.push(SensorSettingsConfigComponent);
  }

}
