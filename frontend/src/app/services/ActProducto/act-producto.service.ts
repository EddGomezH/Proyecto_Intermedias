import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders}  from '@angular/common/http';
import { Producto } from 'src/app/models/producto';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class ActProductoService {

  constructor(private http: HttpClient) { }

  PutProducto(Produc:Producto, CantN:number, mot:string, id_usuario:number,id_bodega:number){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>( baseURL+'LogProductos', {Id_Producto:Produc.Id_Producto,Id_Bodega:id_bodega,CantidadNueva:CantN,Motivo:mot,Id_Usuario:id_usuario} , httpOptions);
  }
}
