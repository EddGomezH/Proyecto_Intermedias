import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders}  from '@angular/common/http';

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
    return this.http.post<any>( 'http://localhost:3000/TransExternas', {Tipo:1} , httpOptions);
  }
}
