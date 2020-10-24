import { Component, ViewChild,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { MatTable } from '@angular/material/table';

export interface Transferencia {
  codigo: number;
  descripcion: string;
  precio:number;
}


@Component({
  selector: 'app-ordenes-transferencia',
  templateUrl: './ordenes-transferencia.component.html',
  styleUrls: ['./ordenes-transferencia.component.css']
})
export class OrdenesTransferenciaComponent implements OnInit {

  columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];

  datos: Transferencia[] = [
  {codigo: 1, descripcion: 'limones',  precio: 12} ,
  {codigo: 2, descripcion: 'manzanas',  precio: 53} ,
  {codigo: 3, descripcion: 'naranjas',  precio: 25} ,
  ];

  

  constructor(private router:Router,private _location: Location) { }

  ngOnInit(): void {
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
    console.log(this.datos[cod]);
  }

}
