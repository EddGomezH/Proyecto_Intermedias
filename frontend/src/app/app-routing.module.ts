import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InicioRepartidorComponent } from './components/inicio-repartidor/inicio-repartidor.component';
import { OrdenesVentaComponent } from './components/ordenes-venta/ordenes-venta.component';
import { OrdenesTransferenciaComponent } from './components/ordenes-transferencia/ordenes-transferencia.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'inicio-repartidor',
    component: InicioRepartidorComponent
  },
  {
    path: 'ordenes_venta',
    component: OrdenesVentaComponent
  },
  {
    path: 'ordenes_compra',
    component: OrdenesTransferenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
