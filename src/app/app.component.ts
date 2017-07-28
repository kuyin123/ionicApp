import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsComponent } from '../pages/tabs/tabs.component';
import { SG2KComponent } from '../sg2k/sg2k.component';
declare var screen :any;     //定义全局变量

@Component({
  templateUrl: 'app.html',
 // providers: [NavParams]
})
export class MyApp {
  rootPage:any = SG2KComponent;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      screen.orientation.lock('portrait-primary');
    });
  }
}
