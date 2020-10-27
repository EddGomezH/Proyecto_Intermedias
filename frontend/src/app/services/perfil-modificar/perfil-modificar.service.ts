import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { baseURL } from "../shared/baseURL";

@Injectable({
  providedIn: 'root'
})
export class PerfilModificarService {

  constructor(private http:HttpClient) { }

  modificar_usuario(usuario:any)
  {
    return this.http.post(baseURL+'perfil',usuario);
  }
  
}
