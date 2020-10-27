import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { PerfilService } from "../../services/perfil/perfil.service";

interface Rol {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  roles: Rol[] = [];

  rol_seleccionado: 'none'

  usuario=
  {
    dpi:'',
    nombre: '',
    fecha: '',
    email: '',
    password:'',
    id_usuario:''
  }
  c_password: string 
  

  constructor(private usuario_perfil:PerfilService,private router:Router,private _location: Location) { }

  ngOnInit(): void {
    let id=sessionStorage.getItem('id');
    console.log(id);
    if(id!=null)
    {
      this.ColocarCampos(id);
    }
    else
    {
      this.router.navigate(['/login']);
    }
    
  }

  ColocarCampos(id:any)
  {
    this.usuario_perfil.obtener_datos({id}).subscribe((res:any) => {
      if(res.msg!='Incorrecto'){
        this.usuario.dpi=res.msg[0].dpi;
        this.usuario.nombre=res.msg[0].nombre;
        this.usuario.fecha=res.msg[0].fecha_nacimiento.split("T", 1);
        this.usuario.email=res.msg[0].correo;
        this.usuario.password=res.msg[0].contrasena;
        this.c_password=res.msg[0].contrasena;
        this.usuario.id_usuario=id;

        for(let registro of res.msg)
        {
          switch(registro.FK_Rol)
          {
            case 1:
              this.roles.push({value: 1, viewValue: 'Vendedor'});
              break;
            case 2:
              this.roles.push({value: 2, viewValue: 'Bodeguero'});
              break;
            case 3:
              this.roles.push({value: 3, viewValue: 'Repartidor'});
              break;
          }
        }

        console.log(res.msg);
        console.log(this.usuario);
        return;
      }else {
        alert('Error al obtener los datos del perfil');
        return;
      }
    });
    //console.log(this.usuario)
    return;
  }

  Modificar()
  {
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
