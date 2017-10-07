import { Component } from '@angular/core';
import { TelemetriaPage, ElectrodoPage, VariablesPage, EstadosPage} from "../index.paginas";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  constructor(  ) {
    this.tab1 = TelemetriaPage;
    this.tab2 =ElectrodoPage;
    this.tab3 = EstadosPage;
    this.tab4= VariablesPage;



    }


}
