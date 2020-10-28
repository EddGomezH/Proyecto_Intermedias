import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class SedeEncargadoService {

  constructor(private  http:HttpClient) { }

  registro_sede_encargado(sede_encargado:any){
    return this.http.post(baseURL+'registro_sede_encargado',sede_encargado);
  }
}
