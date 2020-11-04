import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SedeEncargadoService } from '../../services/sede-encargado/sede-encargado.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sede-encargado',
  templateUrl: './sede-encargado.component.html',
  styleUrls: ['./sede-encargado.component.css']
})
export class SedeEncargadoComponent implements OnInit {

  sede_encargado={
    alias:'',
    direccion: '',
    departamento: '',
    municipio: '',
    nombre: '',
    pass: ''
  }

  constructor(private router:Router, private registrar:SedeEncargadoService, private toast:ToastrService) { }

  ngOnInit(): void {
  }

  Registrar(){
    this.registrar.registro_sede_encargado(this.sede_encargado).subscribe((res:any) => {
      if(res.msg=='OK'){
        this.toast.success('La Sede y el Encargado se registraron con exito', 'Registro exitoso');
      }else if(res.msg == 'Error'){
        this.toast.error('Ah ocurrido un error durante el registro', 'Registro no efectuado');
      }
    });
  }

  Volver(){
    this.router.navigate(['/inicio_encargado']);
  }
}
