import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CuentasComponent } from '../cuentas/cuentas.component';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { InicioComponent } from '../inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'cuentas',
        component: CuentasComponent
      },
      {
        path:'pedidos',
        component: PedidosComponent
      },
      {
        path:'comidas',
        component: InicioComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
