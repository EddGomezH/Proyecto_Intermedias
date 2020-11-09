import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders}  from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

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
    return this.http.post<any>( baseURL+'ObSede', {Id_Usuario:Id_Usuario} , httpOptions);
  }
}
