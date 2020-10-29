import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { MatTable } from '@angular/material/table';

import { OrdenesService } from "../../services/ordenes/ordenes.service";

export interface Venta {
  id_venta: number;
  fk_nit: string;
  nombre: string;
  fecha_facturacion: string;
  fecha_entrega: string;
  estado:string;
  total:number;
}

@Component({
  selector: 'app-ordenes-venta',
  templateUrl: './ordenes-venta.component.html',
  styleUrls: ['./ordenes-venta.component.css']
})
export class OrdenesVentaComponent implements OnInit {

  columnas: string[] = ['numero', 'nit', 'usuario', 'fecha_f','fecha_e', 'estado', 'total', 'borrar'];

  datos: Venta[] = [];

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
    this.get_ventas.obtener_ventas().subscribe((ordenes: any) => {

      for(let registro of ordenes)
      {
        this.datos.push({
          id_venta: registro.id_venta,
          fk_nit: registro.fk_nit,
          nombre: registro.nombre,
          fecha_facturacion: registro.fecha_facturacion.split("T", 1)[0],
          fecha_entrega: registro.fecha_entrega.split("T", 1)[0],
          estado: 'Sin entregar',
          total:registro.total
          });
      }
      this.tabla1.renderRows();
    })
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
    let id_venta=this.datos[cod].id_venta;
    console.log(id_venta)
    this.get_ventas.actualizar_ventas({id_venta}).subscribe((res:any) => {
      if(res.msg=='Correcto'){
        console.log('La orden se modificó a entregada');
      }else if(res.msg=='Incorrecto'){
        console.log('No se pudo modificar la orden como entregada');
      }
    });
  }
  
 
}
