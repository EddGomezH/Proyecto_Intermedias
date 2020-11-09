import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders}  from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class GetBodegasService {

  constructor(private http: HttpClient) { }
  
  getBodegas(){
    return this.http.get(baseURL+'Bodegas');
  }

  getBodegaSede(id_sede:number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(baseURL+'ObBodegaSede', { Id_Sede: id_sede }, httpOptions);
  }
}
