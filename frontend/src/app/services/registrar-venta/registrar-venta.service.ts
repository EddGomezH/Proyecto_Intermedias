import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarVentaService {

  constructor(private  http:HttpClient) { }

  getProductos(){
    return this.http.get('URL API');
  }

  realizar_venta(venta:any){
    return this.http.post('URL API',venta);
  }
}
