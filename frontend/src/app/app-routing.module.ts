import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActualizacionInventarioComponent} from '../app/components/actualizacion-inventario/actualizacion-inventario.component';
import { fromEventPattern } from 'rxjs';
import {SolicitarTransComponent} from '../app/components/solicitar-trans/solicitar-trans.component';
import {VATransExternasComponent} from '../app/components/vatrans-externas/vatrans-externas.component';
import {VTransInternasComponent} from '../app/components/vtrans-internas/vtrans-internas.component';
import {InicioBodegueroComponent} from '../app/components/inicio-bodeguero/inicio-bodeguero.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
