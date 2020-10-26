import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioEncargadoComponent } from '../app/components/inicio-encargado/inicio-encargado.component';

const routes: Routes = [
  {
    path: 'inicio_encargado',
    component: InicioEncargadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
