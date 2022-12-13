import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapicarPageRoutingModule } from './papicar-routing.module';

import { PapicarPage } from './papicar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PapicarPageRoutingModule
  ],
  declarations: [PapicarPage]
})
export class PapicarPageModule {}
