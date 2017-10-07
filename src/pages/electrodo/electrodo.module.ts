import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElectrodoPage } from './electrodo';

@NgModule({
  declarations: [
    ElectrodoPage,
  ],
  imports: [
    IonicPageModule.forChild(ElectrodoPage),
  ],
})
export class ElectrodoPageModule {}
