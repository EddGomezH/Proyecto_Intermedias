import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-encargado',
  templateUrl: './inicio-encargado.component.html',
  styleUrls: ['./inicio-encargado.component.css']
})
export class InicioEncargadoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  sede_encargado(){
    this.router.navigate(['/sede_encargado']);
  }

  registrar_rol(){
    this.router.navigate(['/registrar_rol']);
  }

  salir(){
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('rol');

    this.router.navigate(['']);
  }
}
