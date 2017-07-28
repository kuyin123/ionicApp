import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {SetComponent} from './set.component';

@NgModule({
  imports: [IonicModule],
  declarations: [SetComponent],
  entryComponents: [SetComponent],
  providers: [],
  exports: [IonicModule]
})
export class SetModule {
}
