import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class VentaService{
      private api="http://localhost:8085/Ventas";

      constructor(private http: HttpClient) { }
      
      public guardar(venta:any):Observable<any>{
          return this.http.post(this.api,venta);
      }
  }