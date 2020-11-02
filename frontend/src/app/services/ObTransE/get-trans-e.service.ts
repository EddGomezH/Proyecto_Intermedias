import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders}  from '@angular/common/http';
import {BSolicitudT} from '../../models/bsolicitud-t';

@Injectable({
  providedIn: 'root'
})
export class GetTransEService {

  constructor(private http: HttpClient) { }

  GetTransfE(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>( 'http://localhost:3000/TransExternas', {Tipo:0} , httpOptions);
  }

  PostSolitud(sol:BSolicitudT){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>( 'http://localhost:3000/Solicitud', sol , httpOptions);
  }

  GetTransfI(sede:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>( 'http://localhost:3000/TransInternas', {Tipo:1,Id_Sede:sede} , httpOptions);
  }

}
