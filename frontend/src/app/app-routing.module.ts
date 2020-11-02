import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InicioRepartidorComponent } from './components/inicio-repartidor/inicio-repartidor.component';
import { OrdenesTransferenciaComponent } from './components/ordenes-transferencia/ordenes-transferencia.component';
import { OrdenesVentaComponent } from './components/ordenes-venta/ordenes-venta.component';
import {ActualizacionInventarioComponent} from '../app/components/actualizacion-inventario/actualizacion-inventario.component';
import { fromEventPattern } from 'rxjs';
import {SolicitarTransComponent} from '../app/components/solicitar-trans/solicitar-trans.component';
import {VATransExternasComponent} from '../app/components/vatrans-externas/vatrans-externas.component';
import {VTransInternasComponent} from '../app/components/vtrans-internas/vtrans-internas.component';
import {InicioBodegueroComponent} from '../app/components/inicio-bodeguero/inicio-bodeguero.component';

import { RegistrarClienteComponent } from '../app/components/registrar-cliente/registrar-cliente.component';
import { InicioVendedorComponent } from '../app/components/inicio-vendedor/inicio-vendedor.component';
import { RegistrarVentaComponent } from '../app/components/registrar-venta/registrar-venta.component';
import { ReporteVentaComponent } from '../app/components/reporte-venta/reporte-venta.component';
import { InicioEncargadoComponent } from '../app/components/inicio-encargado/inicio-encargado.component';
import { SedeEncargadoComponent } from '../app/components/sede-encargado/sede-encargado.component';
import { RegistarRolComponent } from '../app/components/registar-rol/registar-rol.component';
const routes: Routes = [
  {
    path: '',
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
    path: 'ordenes_transferencia',
    component: OrdenesTransferenciaComponent
  },
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
  },
  {
    path: 'reporte_venta',
    component: ReporteVentaComponent
  },
  {
    path: 'inicio_encargado',
    component: InicioEncargadoComponent
  },
  {
    path: 'sede_encargado',
    component: SedeEncargadoComponent
  },
  {
    path: 'registrar_rol',
    component: RegistarRolComponent
  },
  {
    path: 'ActInventario',
    component: ActualizacionInventarioComponent,
  },
  {
    path: 'SoliTrans',
    component: SolicitarTransComponent,
  },
  {
    path: 'VerTransEx',
    component: VATransExternasComponent,
  },
  {
    path: 'VerTransIn',
    component: VTransInternasComponent,
  },
  {
    path: 'inicio-bodeguero',
    component: InicioBodegueroComponent,
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
