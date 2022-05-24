import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoItem } from '../Entidades/CarritoItem';
import { Producto } from '../Entidades/Producto';
import { ProductoService } from '../productos.service';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})

export class VistaProductoComponent implements OnInit {
  producto:Producto=new Producto();
  constructor(public productoService:ProductoService, public carritoService:CarritoService, private rutaActiva: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productoService.setId(this.rutaActiva.snapshot.params.id);
    this.productoService.getProductosId().subscribe(resp=>{
      this.producto=resp;
    }, error=>{console.error(error)})
  }
  
  agregar(){
    let item:CarritoItem=new CarritoItem();
    item.nombre=this.producto.nombre;
    item.precio=this.producto.precio;
    this.carritoService.agregar(item).subscribe(resp=>{ 
    },
      error=> {console.error(error)}
    )
  }

}
