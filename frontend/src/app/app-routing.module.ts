import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioEncargadoComponent } from '../app/components/inicio-encargado/inicio-encargado.component';
import { SedeEncargadoComponent } from '../app/components/sede-encargado/sede-encargado.component';
import { RegistarRolComponent } from '../app/components/registar-rol/registar-rol.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
