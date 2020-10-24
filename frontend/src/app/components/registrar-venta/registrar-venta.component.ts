import { Component, OnInit } from '@angular/core';
import { RegistrarVentaService } from 'src/app/services/registrar-venta/registrar-venta.service';
import { Router } from '@angular/router';
import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';

@Component({
  selector: 'app-registrar-venta',
  templateUrl: './registrar-venta.component.html',
  styleUrls: ['./registrar-venta.component.css']
})
export class RegistrarVentaComponent implements OnInit {

  venta = {
    nit: '',
    id_vendedor: sessionStorage.getItem('id_usuario'),
    fecha_facturacion: new Date().toLocaleDateString(),
    fecha_entrega: '',
    productos: ''
  }
  domicilio=false;
  lproducto = [];
  carrito = [];

  constructor(private vender:RegistrarVentaService, private router:Router) { 
    this.vender.getProductos().subscribe((res:any[]) => {
      this.lproducto=res;
    });
  }

  ngOnInit(): void { }

  AgregarCarrito(producto:any){
    this.carrito.push(producto);
  }

  Vender(){
    this.venta.productos = JSON.parse(JSON.stringify(this.carrito));
    this.vender.realizar_venta(this.venta).subscribe((res:any) => {
      console.log(res);
    });
  }

  Volver(){
    this.router.navigate(['/inicio_vendedor']);
  }
}
