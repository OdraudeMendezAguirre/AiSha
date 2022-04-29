import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { ProductoService } from '../productos.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  productos:any;
  
  constructor(public productoService:ProductoService) {}

  ngOnInit():void{
    this.productoService.getProductos().subscribe(resp =>{
      this.productos=resp;
    }, error => {console.error(error)}
    )
  }
  
  setId(id:any){
    let producto:ProductoComponent=new ProductoComponent(this.productoService);
    producto.setId(id);
  }
}