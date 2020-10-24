import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { MatTable } from '@angular/material/table';

export interface Venta {
  codigo: number;
  descripcion: string;
  precio:number;
}

@Component({
  selector: 'app-ordenes-venta',
  templateUrl: './ordenes-venta.component.html',
  styleUrls: ['./ordenes-venta.component.css']
})
export class OrdenesVentaComponent implements OnInit {

  columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];

  datos: Venta[] = [
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

  @ViewChild(MatTable) tabla1: MatTable<Venta>;

  borrarFila(cod: number) {
    if (confirm("Desea marcar la venta como entregada?")) {
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
