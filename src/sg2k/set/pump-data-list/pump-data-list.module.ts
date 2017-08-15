/*
*机泵数据列表模块
* */
import {NgModule} from "@angular/core"
import {IonicModule} from "ionic-angular"

import {PumpDataListComponent} from "./pump-data-list.component"
import {PumpDataListHttp} from "./pump-data-list.http"

@NgModule({
  imports: [IonicModule],
  declarations: [PumpDataListComponent],
  entryComponents: [PumpDataListComponent],
  providers: [PumpDataListHttp],
  exports: [IonicModule]
})
export class PumpDataListModule {

}
