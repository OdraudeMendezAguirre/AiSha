import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoComponent } from '../carrito/carrito.component';
import { ProductoService } from '../productos.service';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  id_producto = 1;
  producto:any;
    constructor(public productoService:ProductoService) {}

  setId(id:number){
    this.id_producto=id;
  }
  ngOnInit():void{
    this.productoService.getProductosId(this.id_producto).subscribe(resp =>{
      this.producto=resp;
    }, error => {console.error(error)}
    )
  }
  agregarCarrito(){
    let carrito: CarritoComponent = new CarritoComponent();
    carrito.setProducto(this.producto);
  }
  comprar(){
    let ticket:TicketComponent = new TicketComponent();
    //ticket.enviarProducto(this.producto);
  }

}
