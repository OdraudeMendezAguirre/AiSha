import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../productos.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  id_producto: number = 0;
  nombre: String = "";
  precio: number = 0;
  descripcion: String = "";
  almacen: number = 0;
  imagen: String = "";
  productos=[];
  itemCount: number = 0;
  producto: any =null;
  constructor(private _data: ProductoService) { }

  ngOnInit(){
    this.itemCount = this.productos.length;
    this._data.producto.subscribe(res=> this.productos = res);
    this._data.changeProducto(this.productos);

    this._data.getProductos()
     .subscribe((data: any) => {
      alert(JSON.stringify(data.productos));

      this.productos = data.productos;
      this.producto= this._data;
      this._data.changeProducto(this.productos);
    });
  } 
}