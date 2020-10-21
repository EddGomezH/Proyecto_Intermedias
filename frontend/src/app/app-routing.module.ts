import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActualizacionInventarioComponent} from '../app/components/actualizacion-inventario/actualizacion-inventario.component';
import { fromEventPattern } from 'rxjs';

const routes: Routes = [
  {
    path: 'ActInventario',
    component: ActualizacionInventarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
