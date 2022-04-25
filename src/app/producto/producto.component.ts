import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  //itemCount: number;
  id_producto: number = 0;
  producto=[];

  constructor(private _data: ProductoService) { }

  ngOnInit() {
    this._data.producto.subscribe(res=> this.producto = res);

    this._data.getProductoId(this.id_producto)
     .subscribe((data: any) => {
      alert(JSON.stringify(data.productos)); //cambiado 49-51
      this.producto = data.productos;
    });
  }

}
