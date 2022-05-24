import { Component, OnInit } from '@angular/core';
import { Producto } from '../Entidades/Producto';
import { ProductoService } from '../productos.service';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  lista: Producto[] = [];
 
  constructor(public productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(resp=>{
      this.lista=resp;
    }, error=>{console.error(error)})
  }
}
