import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TabsComponent } from './tabs.component'

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    IonicModule
  ],
  entryComponents: [
    TabsComponent
  ],
  providers:[],
  exports:[IonicModule]
})
export class TabsModules {}
