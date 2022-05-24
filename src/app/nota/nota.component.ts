import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../Entidades/Producto';
import { Ticket } from '../Entidades/Ticket';
import { Venta } from '../Entidades/Venta';
import { ProductoService } from '../productos.service';
import { TicketService } from '../ticket.service';
import { VentaService } from '../ventas.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  producto:Producto=new Producto();
  
  
  constructor(public productoService:ProductoService,public ventaService:VentaService,private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.productoService.setId(this.rutaActiva.snapshot.params.id);
    this.productoService.getProductosId().subscribe(resp=>{
      this.producto=resp;
    }, error=>{console.error(error)})
  }
  
  compra():void{
    let venta:Venta=new Venta();
    venta.setIdProducto(this.rutaActiva.snapshot.params.id);

    this.ventaService.guardar(venta).subscribe(resp=>{},
      error=>{console.error(error)})

    window.alert("compra satisfactoria")
  }

}
