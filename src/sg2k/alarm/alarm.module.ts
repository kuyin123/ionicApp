import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {AlarmComponent} from './alarm.component';
import { AlarmHttp } from './alarm.http'

@NgModule({
  imports: [IonicModule],
  declarations: [AlarmComponent],
  entryComponents: [AlarmComponent],
  providers: [AlarmHttp],
  exports: [IonicModule]
})
export class AlarmModule {
}
