import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgTransferenciaService {

  constructor(private http: HttpClient) { }

  AgTransferencia(Tipo:number, Id_Usuario:number, Id_Sede:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>( 'http://localhost:3000/Transferencia', {Tipo:Tipo, Id_Usuario:Id_Usuario, Id_Sede:Id_Sede} , httpOptions);
  }
}