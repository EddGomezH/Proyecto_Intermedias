import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgDetalleTransService {

  constructor(private http: HttpClient) { }
  AgDTransferencia(Id_Producto:number,	Id_Trans:number, Cantidad:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>( 'http://localhost:3000/DetalleTransferencia', {Id_Producto:Id_Producto, Id_Trans:Id_Trans, Cantidad:Cantidad} , httpOptions);
  }
}