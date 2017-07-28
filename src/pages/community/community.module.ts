import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommunityComponent } from './community.component'
import {Service} from "./service"

@NgModule({
  declarations: [
    CommunityComponent
  ],
  imports: [
    IonicModule
  ],
  entryComponents: [
    CommunityComponent
  ],
  providers:[Service],
  exports:[IonicModule]
})
export class CommunityModule {}
