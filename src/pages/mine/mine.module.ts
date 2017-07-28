import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MineComponent } from './mine.component'

@NgModule({
  declarations: [
    MineComponent
  ],
  imports: [
    IonicModule
  ],
  entryComponents: [
    MineComponent
  ],
  providers:[],
  exports:[IonicModule]
})
export class MineModule {}
