import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ServiceComponent } from './service.component'

@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    IonicModule
  ],
  entryComponents: [
    ServiceComponent
  ],
  providers:[],
  exports:[IonicModule]
})
export class ServiceModule {}
