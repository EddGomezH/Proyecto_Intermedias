import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class RegistroRolService {

  constructor(private  http:HttpClient) { }

  registrar_rol(user:any){
    return this.http.post(baseURL+'registro_rol',user);
  }
}
