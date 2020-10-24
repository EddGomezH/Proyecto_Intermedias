import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import { OrdenesVentaComponent } from './components/ordenes-venta/ordenes-venta.component';
import { OrdenesTransferenciaComponent } from './components/ordenes-transferencia/ordenes-transferencia.component';
import { InicioRepartidorComponent } from './components/inicio-repartidor/inicio-repartidor.component';
import { PerfilComponent } from './components/perfil/perfil.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdenesVentaComponent,
    OrdenesTransferenciaComponent,
    InicioRepartidorComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
