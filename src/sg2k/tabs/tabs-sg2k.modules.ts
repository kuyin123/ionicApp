import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TabsSg2kComponent } from './tabs-sg2k.component'
import { SearchComponent } from './../search/serach.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    TabsSg2kComponent,
    SearchComponent
  ],
  imports: [
    IonicModule
  ],
  entryComponents: [
    TabsSg2kComponent,
    SearchComponent
  ],
  providers:[BarcodeScanner],
  exports:[IonicModule]
})
export class TabsSg2kModules {}
