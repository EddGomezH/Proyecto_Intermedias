import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarClienteComponent } from './components/registrar-cliente/registrar-cliente.component';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InicioVendedorComponent } from './components/inicio-vendedor/inicio-vendedor.component';
import { RegistrarVentaComponent } from './components/registrar-venta/registrar-venta.component';
import { ReporteVentaComponent } from './components/reporte-venta/reporte-venta.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts"; 
import { ToastrModule } from 'ngx-toastr';
import { ChartsModule } from 'ng2-charts';
import { InicioEncargadoComponent } from './components/inicio-encargado/inicio-encargado.component';
import { SedeEncargadoComponent } from './components/sede-encargado/sede-encargado.component';
import { RegistarRolComponent } from './components/registar-rol/registar-rol.component';

import { OrdenesVentaComponent } from './components/ordenes-venta/ordenes-venta.component';
import { InicioRepartidorComponent } from './components/inicio-repartidor/inicio-repartidor.component';
import { OrdenesTransferenciaComponent } from './components/ordenes-transferencia/ordenes-transferencia.component';
import { PerfilComponent } from './components/perfil/perfil.component';
PdfMakeWrapper.setFonts(pdfFonts);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdenesVentaComponent,
    OrdenesTransferenciaComponent,
    InicioRepartidorComponent,
    PerfilComponent,
    RegistrarClienteComponent,
    InicioVendedorComponent,
    RegistrarVentaComponent,
    ReporteVentaComponent,
    SedeEncargadoComponent,
    InicioEncargadoComponent,
    RegistarRolComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
