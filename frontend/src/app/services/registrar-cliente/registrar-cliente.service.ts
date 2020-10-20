import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarClienteService {

  constructor(private  http:HttpClient) { }

  registrar_cliente(cliente:any){
    return this.http.post('url api',cliente);
  }
}
