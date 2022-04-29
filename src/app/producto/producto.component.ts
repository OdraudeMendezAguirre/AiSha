import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService } from '../productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  id_producto = 0;
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


}
