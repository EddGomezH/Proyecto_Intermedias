import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { PerfilService } from "../../services/perfil/perfil.service";

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

  usuario=
  {
    dpi:'',
    nombre: '',
    fecha: '',
    email: '',
    password:''
  }
  c_password: string 
  

  constructor(private usuario_perfil:PerfilService,private router:Router,private _location: Location) { }

  ngOnInit(): void {
  }

  Modificar()
  {
    console.log(this.usuario)
    if(this.usuario.dpi!=''&&this.usuario.nombre!=''&&this.usuario.fecha!=''&&this.usuario.email!=''&&this.usuario.password!='')
    {
      if(this.usuario.password==this.c_password)
      {
        this.usuario_perfil.modificar_usuario(this.usuario).subscribe((res:any) => {
          if(res.msg=='Correcto'){
            alert('Los datos del usuario han sido alterados con éxito');
          }else if(res.msg=='Incorrecto'){
            alert('El usuario no se pudo modificar');
          }
        });
        console.log(this.usuario)
        return;
      }
      alert("contraseñas no coinciden")
      return;
    }
    alert("Faltan datos por llenar")
  }
  Cancelar()
  {
    this._location.back();;
  }
}
