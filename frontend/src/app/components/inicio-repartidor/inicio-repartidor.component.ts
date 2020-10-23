import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-repartidor',
  templateUrl: './inicio-repartidor.component.html',
  styleUrls: ['./inicio-repartidor.component.css']
})
export class InicioRepartidorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ordenes_venta(){
    this.router.navigate(['/ordenes_venta']);
  }

  ordenes_transferencia(){
    this.router.navigate(['/ordenes_compra']);
  }
  perfil(){
    console.log('perfil...')
  }

  Salir(){
    console.log('saliendo...');
  }

}
