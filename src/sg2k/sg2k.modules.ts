import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HomeModule } from './home/home.module';
import { AlarmModule } from './alarm/alarm.module';
import { SetModule } from './set/set.module';
import { TabsSg2kModules } from './tabs/tabs-sg2k.modules';
import { SG2KComponent } from './sg2k.component';
import { TabsSg2kComponent } from './tabs/tabs-sg2k.component';
import { SearchHttp } from './search/search.http';

@NgModule({
  declarations: [
    SG2KComponent,
  ],
  imports: [
    IonicModule,
    HomeModule,
    AlarmModule,
    SetModule,
    TabsSg2kModules
  ],
  entryComponents: [
    SG2KComponent,
    TabsSg2kComponent,
  ],
  providers:[SearchHttp],
  exports:[IonicModule]
})
export class SG2KModule {}
