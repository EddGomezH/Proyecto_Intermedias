import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { baseURL } from "../shared/baseURL";

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http:HttpClient) { }

  modificar_usuario(usuario:any)
  {
    return this.http.post(baseURL+'perfil',usuario);
  }

  obtener_datos(id:any)
  { 
    return  this.http.post(baseURL+'perfil-datos',id);
  }
}
