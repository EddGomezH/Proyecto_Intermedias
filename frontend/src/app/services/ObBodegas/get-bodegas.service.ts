import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetBodegasService {

  constructor(private http: HttpClient) { }
  
  getBodegas(){
    return this.http.get('http://localhost:3000/Bodegas');
  }

  getBodegaSede(id_sede:number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>('http://localhost:3000/ObBodegaSede', { Id_Sede: id_sede }, httpOptions);
  }
}
