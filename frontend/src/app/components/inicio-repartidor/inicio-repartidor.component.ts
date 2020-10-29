import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-repartidor',
  templateUrl: './inicio-repartidor.component.html',
  styleUrls: ['./inicio-repartidor.component.css']
})
export class InicioRepartidorComponent implements OnInit {

  constructor(private router:Router) { 
    let id=sessionStorage.getItem('id');
    let rol=sessionStorage.getItem('rol');

    if(id==null)
    {
      this.router.navigate(['/login']);
      
    }else if(rol!='3')
    {
      this.router.navigate(['/login']);
    }

  }

  ngOnInit(): void {
  }

  ordenes_venta(){
    this.router.navigate(['/ordenes_venta']);
  }

  ordenes_transferencia(){
    this.router.navigate(['/ordenes_transferencia']);
  }
  perfil(){
    this.router.navigate(['/perfil']);
  }

  Salir(){
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('rol');

    this.router.navigate(['/login']);
  }

}
