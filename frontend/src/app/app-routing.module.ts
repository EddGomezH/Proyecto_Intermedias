import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrarClienteComponent } from '../app/components/registrar-cliente/registrar-cliente.component';

const routes: Routes = [
  {
    path: 'registrar_cliente',
    component: RegistrarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
