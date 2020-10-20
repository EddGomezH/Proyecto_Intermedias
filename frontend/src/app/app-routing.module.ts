import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarClienteComponent } from '../app/components/registrar-cliente/registrar-cliente.component';
import { InicioVendedorComponent } from '../app/components/inicio-vendedor/inicio-vendedor.component';
import { RegistrarVentaComponent } from '../app/components/registrar-venta/registrar-venta.component';

const routes: Routes = [
  {
    path: 'registrar_cliente',
    component: RegistrarClienteComponent
  },
  {
    path: 'inicio_vendedor',
    component: InicioVendedorComponent
  },
  {
    path: 'registrar_venta',
    component: RegistrarVentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
