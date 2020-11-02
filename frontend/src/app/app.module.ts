import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualizacionInventarioComponent } from './components/actualizacion-inventario/actualizacion-inventario.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogoActProducComponent } from './components/dialogo-act-produc/dialogo-act-produc.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { SolicitarTransComponent } from './components/solicitar-trans/solicitar-trans.component';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { VATransExternasComponent } from './components/vatrans-externas/vatrans-externas.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { DialogoTransEComponent } from './components/dialogo-trans-e/dialogo-trans-e.component';
import { VTransInternasComponent } from './components/vtrans-internas/vtrans-internas.component';
import { InicioBodegueroComponent } from './components/inicio-bodeguero/inicio-bodeguero.component';

@NgModule({
  declarations: [
    AppComponent,
    ActualizacionInventarioComponent,
    DialogoActProducComponent,
    SolicitarTransComponent,
    VATransExternasComponent,
    DialogoTransEComponent,
    VTransInternasComponent,
    InicioBodegueroComponent
  ],
  imports: [
    MatSelectModule,
    MatTableModule,
    MatDividerModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FormsModule,
    MatRadioModule,
    MatDialogModule, // <--- Aquí
  ],
  providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: [] }],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
