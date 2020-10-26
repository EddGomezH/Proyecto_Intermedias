import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class RegistrarVentaService {

  constructor(private  http:HttpClient) { }

  getProductos(){
    return this.http.get(baseURL+'get_productos');
  }

  realizar_venta(venta:any){
    return this.http.post(baseURL+'registrar_venta',venta);
  }

  datos_venta(){
    return this.http.get(baseURL+'get_datos_venta');
  }

  detalle_venta(venta:any){
    return this.http.post(baseURL+'get_detalle_venta',venta);
  }

  reporte_ventas_lineas(){
    return this.http.get(baseURL+'grafica_general');
  }
}
