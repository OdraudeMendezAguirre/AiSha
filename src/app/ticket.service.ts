import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ticket } from "./Entidades/Ticket";

@Injectable({
    providedIn: 'root'
  })
  export class TicketService{
      private api="http://localhost:8085/Ticket";

      constructor(private http: HttpClient) { }
      
      public guardar(ticket:Ticket):Observable<any>{
          return this.http.post(this.api,ticket);
      }
  }