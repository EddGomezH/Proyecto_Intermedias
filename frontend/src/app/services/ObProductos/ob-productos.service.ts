import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class ObProductosService {

  constructor(private http: HttpClient) { }

  getProductos(){
    return  this.http.get(baseURL+'Productos');
  }
}
