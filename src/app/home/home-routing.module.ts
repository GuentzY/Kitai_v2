import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { Cuentas } from '../cuentas/cuentas.component';
import { Pedidos } from '../pedidos/pedidos.component';
import { Inicio } from '../inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'cuentas',
        component: Cuentas
      },
      {
        path:'pedidos',
        component: Pedidos
      },
      {
        path:'comidas',
        component: Inicio
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
