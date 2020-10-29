import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private  http:HttpClient) { }

  obtener_ventas(){
    return this.http.get(baseURL+'get_datos_ventas');
  }
  obtener_transferencias(id:any){
    return this.http.post(baseURL+'get_datos_transferencias',id);
  }

  actualizar_ventas(ventas:any){
    return this.http.post(baseURL+'set_estado_ventas',ventas);
  }

  actualizar_transferencias(transferencias:any){
    return this.http.post(baseURL+'set_estado_transferencias',transferencias);
  }
}
