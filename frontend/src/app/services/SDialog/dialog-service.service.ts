import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoActProducComponent } from '../../components/dialogo-act-produc/dialogo-act-produc.component';


@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(private dialog: MatDialog) { }

  ConfirmDialogActualizarProduc(){
    return this.dialog.open(DialogoActProducComponent,{
      width: "390xp",
      panelClass: 'confirm-dialog-container',
      disableClose: true
  });
  }
}
