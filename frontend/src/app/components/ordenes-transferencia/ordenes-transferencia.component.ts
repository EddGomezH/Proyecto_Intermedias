import { Component, ViewChild,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { MatTable } from '@angular/material/table';

import { OrdenesService } from "../../services/ordenes/ordenes.service";

export interface Transferencia {
  numero: number;
  usuario: string;
  sede:number;
}


@Component({
  selector: 'app-ordenes-transferencia',
  templateUrl: './ordenes-transferencia.component.html',
  styleUrls: ['./ordenes-transferencia.component.css']
})
export class OrdenesTransferenciaComponent implements OnInit {

  columnas: string[] = ['numero', 'usuario', 'sede', 'estado','borrar'];

  datos: Transferencia[] = [];

  id:any;

  constructor(private router:Router,private _location: Location,public get_ventas:OrdenesService) { }

  ngOnInit(): void {
    let id=sessionStorage.getItem('id');
    let rol=sessionStorage.getItem('rol');

    if(id==null)
    {
      this.router.navigate(['/login']);
      return;
      
    }else if(rol!='3')
    {
      this.router.navigate(['/login']);
      return;
    }

    this.Iniciar_ordenes(id);
    
  }

  Iniciar_ordenes(id:any)
  {
    this.get_ventas.obtener_transferencias({id}).subscribe((ordenes: any) => {

      for(let registro of ordenes)
      {
          this.datos.push({
          numero: registro.numero,
          usuario: registro.usuario,
          sede: registro.sede
          });
      }
      this.tabla1.renderRows();
    })
  }

  Regresar()
  {
    this._location.back();;
  }

  @ViewChild(MatTable) tabla1: MatTable<Transferencia>;

  borrarFila(cod: number) {
    if (confirm("Desea marcar la transacción como entregada?")) {
      this.borrarOrden(cod);
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }
  borrarOrden(cod: number)
  {
    let numero=this.datos[cod].numero;
    console.log(numero);
    this.get_ventas.actualizar_transferencias({numero}).subscribe((res:any) => {
      if(res.msg=='Correcto'){
        console.log('La orden se modificó a entregada');
      }else if(res.msg=='Incorrecto'){
        console.log('No se pudo modificar la orden como entregada');
      }
    });
  }

}
