import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RegistrarClienteComponent } from './components/registrar-cliente/registrar-cliente.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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

PdfMakeWrapper.setFonts(pdfFonts);

@NgModule({
  declarations: [
    AppComponent,
    RegistrarClienteComponent,
    InicioVendedorComponent,
    RegistrarVentaComponent,
    ReporteVentaComponent,
    InicioEncargadoComponent,
    SedeEncargadoComponent,
    RegistarRolComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
