import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService{
      private api="http://localhost:8085/Usuarios";

      constructor(private http: HttpClient) { }
      
      public guardar(persona:any):Observable<any>{
          return this.http.post(this.api,persona);
      }
  }