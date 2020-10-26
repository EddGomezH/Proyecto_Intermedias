import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActualizacionInventarioComponent} from '../app/components/actualizacion-inventario/actualizacion-inventario.component';
import { fromEventPattern } from 'rxjs';
import {SolicitarTransComponent} from '../app/components/solicitar-trans/solicitar-trans.component';

const routes: Routes = [
  {
    path: 'ActInventario',
    component: ActualizacionInventarioComponent,
  },
  {
    path: 'SoliTrans',
    component: SolicitarTransComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
