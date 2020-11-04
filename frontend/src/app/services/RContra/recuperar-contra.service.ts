import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { baseURL } from "../shared/baseURL";

@Injectable({
  providedIn: 'root'
})
export class RecuperarContraService {

  constructor(private http:HttpClient) {


  }

  RContra(Correo:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>( baseURL+'Contra', {Correo:Correo} , httpOptions);
  }
}
