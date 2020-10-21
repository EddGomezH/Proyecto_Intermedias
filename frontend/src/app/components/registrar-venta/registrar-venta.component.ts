import { Component, OnInit } from '@angular/core';
import { RegistrarClienteService } from 'src/app/services/registrar-cliente/registrar-cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-venta',
  templateUrl: './registrar-venta.component.html',
  styleUrls: ['./registrar-venta.component.css']
})
export class RegistrarVentaComponent implements OnInit {

  venta = {
    nit: '',
    id_vendedor: localStorage.getItem('id_usuario'),
    fecha_facturacion: new Date().toLocaleDateString(),
    fecha_entrega: '',
    productos: ''
  }
  domicilio=false;
  lproducto = [{nombre:'arroz',cantidad:'',precio:0},{nombre:'azucar', cantidad:'',precio:0},{nombre:'cafe',cantidad:'',precio:0},{nombre:'frijol', cantidad:'',precio:0},{nombre:'maiz', cantidad:'',precio:0},{nombre:'harina', cantidad:'',precio:0}]
  carrito = [];

  constructor(private vender:RegistrarClienteService, private router:Router) { }

  ngOnInit(): void { }

  AgregarCarrito(producto:any){
    this.carrito.push(producto);
  }

  Vender(){
    this.venta.productos = JSON.stringify(this.carrito);
    console.log(this.venta);
  }

  Volver(){
    this.router.navigate(['/inicio_vendedor']);
  }
}
