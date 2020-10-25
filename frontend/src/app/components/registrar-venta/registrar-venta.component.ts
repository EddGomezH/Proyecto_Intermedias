import { Component, OnInit } from '@angular/core';
import { RegistrarVentaService } from 'src/app/services/registrar-venta/registrar-venta.service';
import { Router } from '@angular/router';
import { PdfMakeWrapper, Txt, Table } from 'pdfmake-wrapper';
import { ToastrService } from 'ngx-toastr';

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
  vendido=true;
  lproducto = [];
  carrito = [];

  constructor(private vender:RegistrarVentaService, private router:Router, private toastr:ToastrService) { 
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
      if(res.msg=='Venta OK'){
        this.toastr.success('La venta se realizo con exito', 'Venta exitosa');
        this.vendido=false;
      }else if(res.msg=='Producto Insuficiente'){
        this.toastr.error('No existen suficientes unidades del producto', 'Producto Insufiente');
      }
    });
  }

  formateaValor(valor): number {
    return isNaN(valor) ? valor : parseFloat(valor).toFixed(2);
  }

  GenerarFactura(){
    const pdf = new PdfMakeWrapper();
    this.vender.datos_venta().subscribe((res:any) => {
      let fecha = new Date(res[0].Fecha_Facturacion);
      let venta_factura = {
        id_venta: res[0].Id_Venta
      }
      let productos=[];
      let subtotal=0;
      let descuento=0;
      let total_factura=res[0].Total;
      pdf.add(
        new Table([['Factura']]).widths(['*', 250]).fontSize(15).bold().end
      );
      pdf.add(
        new Table([['NIT: '+res[0].NIT, 'No. Venta: '+res[0].Id_Venta]]).widths(['*',250]).end
      );
      pdf.add(
        new Table([['DPI: '+res[0].DPI, 'Nombre: '+res[0].Nombre]]).widths(['*',250]).end
      );
      pdf.add(
        new Table([['Fecha: '+fecha.toLocaleDateString(), 'Direccion: '+res[0].Direccion]]).widths(['*',250]).end
      );
      pdf.add(
        new Txt('\n').end
      );
      this.vender.detalle_venta(venta_factura).subscribe((res:any[]) => {
        productos = res;
        pdf.add(
          new Table([[new Txt('Nombre Producto').fontSize(15).bold().end, new Txt('Descripcion').fontSize(15).bold().end]]).widths(['*',250]).end
        );
        pdf.add(
          new Table([[new Txt('Cantidad').fontSize(15).bold().end, new Txt('Precio').fontSize(15).bold().end]]).widths(['*',250]).end
        );
        for(let i=0; i<productos.length; i++){
          pdf.add(
            new Table([[new Txt('Producto: ').end,productos[i].Nombre]]).widths(['*',250]).end
          );
          subtotal+=productos[i].Total;
          pdf.add(
            new Table([[productos[i].Cantidad, productos[i].Total/productos[i].Cantidad]]).widths(['*',250]).end
          );
        }
        pdf.add(
          new Table([[new Txt('Subtotal').fontSize(15).bold().end, new Txt(subtotal.toString()).fontSize(15).bold().end]]).widths(['*',250]).end
        );
        descuento=subtotal-total_factura;
        pdf.add(
          new Table([[new Txt('Descuento').fontSize(15).bold().end, new Txt(this.formateaValor(descuento).toString()).fontSize(15).bold().end]]).widths(['*',250]).end
        );
        pdf.add(
          new Table([[new Txt('Total').fontSize(17).bold().end, new Txt(total_factura.toString()).fontSize(17).bold().end]]).widths(['*',250]).end
        );
        pdf.create().open();
      });
    });
  }

  Volver(){
    this.router.navigate(['/inicio_vendedor']);
  }
}
