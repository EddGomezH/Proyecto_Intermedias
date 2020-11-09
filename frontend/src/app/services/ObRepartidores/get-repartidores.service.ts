import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class GetRepartidoresService {

  constructor(private http: HttpClient) { }

  getRepartidores(){
    return  this.http.get(baseURL+'Repartidores');
  }
}
