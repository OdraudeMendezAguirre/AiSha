import { Component, OnInit } from '@angular/core';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  lista:any=[];
  contador=0;
  constructor() { }

  ngOnInit(): void {
  }

  setProducto(producto:any){
    this.lista[this.contador]=producto;
    this.contador=this.contador+1;
  }
  
  makeTicket(){
    let ticket:TicketComponent = new TicketComponent();
    //ticket.enviar(this.lista, contador);
  }
}
