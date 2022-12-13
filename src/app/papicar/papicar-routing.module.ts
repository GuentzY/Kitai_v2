import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PapicarPage } from './papicar.page';

const routes: Routes = [
  {
    path: '',
    component: PapicarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PapicarPageRoutingModule {}
