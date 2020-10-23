import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

interface Rol {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  roles: Rol[] = [
    {value: 'vendedor', viewValue: 'Vendedor'},
    {value: 'repartidor', viewValue: 'Repartidor'},
    {value: 'bodequero', viewValue: 'Bodeguero'}
  ];

  rol_seleccionado: string=this.roles[0].value

  dpi: string
  nombre: string
  fecha: string
  email: string
  password:string
  c_password: string 
  

  constructor(private router:Router,private _location: Location) { }

  ngOnInit(): void {
  }

  Modificar()
  {
    console.log("Modificando...")
  }

  Cancelar()
  {
    this._location.back();;
  }
}
