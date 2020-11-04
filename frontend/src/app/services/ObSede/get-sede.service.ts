import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetSedeService {

  constructor(private http: HttpClient) { }

  GetSede(Id_Usuario:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>( 'http://localhost:3000/ObSede', {Id_Usuario:Id_Usuario} , httpOptions);
  }
}
