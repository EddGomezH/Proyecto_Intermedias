import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { baseURL } from "../shared/baseURL";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(credenciales:any)
  {
    return this.http.post(baseURL+'login',credenciales);
  }

}
