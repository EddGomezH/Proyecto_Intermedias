import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-vendedor',
  templateUrl: './inicio-vendedor.component.html',
  styleUrls: ['./inicio-vendedor.component.css']
})
export class InicioVendedorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  registrar_cliente(){
    this.router.navigate(['/registrar_cliente']);
  }

  registrar_venta(){
    this.router.navigate(['/registrar_venta']);
  }

  reporte_ventas(){
    this.router.navigate(['/reporte_venta']);
  }

  perfil(){
    this.router.navigate(['/perfil']);
  }

  Salir(){
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('rol');

    this.router.navigate(['']);
  }
}
