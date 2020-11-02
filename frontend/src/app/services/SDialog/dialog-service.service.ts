import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoActProducComponent } from '../../components/dialogo-act-produc/dialogo-act-produc.component';
import {DialogoTransEComponent} from '../../components/dialogo-trans-e/dialogo-trans-e.component';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(private dialog: MatDialog) { }

  ConfirmDialogActualizarProduc() {
    return this.dialog.open(DialogoActProducComponent, {
      width: "390xp",
      panelClass: 'confirm-dialog-container',
      disableClose: true
    });
  }

  ConfirmDialogTransferenciaE() {
    return this.dialog.open(DialogoTransEComponent, {
      width: "390xp",
      panelClass: 'confirm-dialog-container',
      disableClose: true
    });
  }
}
