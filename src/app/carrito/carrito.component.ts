import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { CarritoItem } from '../Entidades/CarritoItem';
import { Ticket } from '../Entidades/Ticket';
import { TicketService } from '../ticket.service';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  lista:CarritoItem[]=[];
  
  public np:number=0;
  public pt:number=0;

  constructor(public carritoService:CarritoService,public ticketService:TicketService) { }

  ngOnInit(): void {
    this.carritoService.getAll().subscribe(resp=>{
      this.lista=resp;
      for (let index = 0; index < this.lista.length; index++) {
        this.pt =this.pt + this.lista[index].precio;
      }
    }, error=>{console.error(error)})
  }

  eliminar(id:number):void{
    let item:CarritoItem=new CarritoItem();
    item.id=id;
    this.carritoService.eliminar(item.id).subscribe();
    this.lista = this.lista.filter(c => c.id != item.id)
  }
  
  vaciar():void{
    let ticket:Ticket=new Ticket();
    ticket.nprod=this.lista.length;
    ticket.ptot=this.pt;
    this.ticketService.guardar(ticket).subscribe();
    window.alert("compra satisfactoria");
    this.carritoService.vaciar().subscribe();
  }
}
