import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ProductoService{
    private productos = new BehaviorSubject<any>(['id_producto', 'n_prod', 'p_prod', 'd_prod', 'almcn_prod', 'img_prod']);
    producto=  this.productos.asObservable();
    id:number=0;

    constructor(private http: HttpClient) { }
    
    consultar = "http://localhost:8085/Productos";
    cid= "http://localhost:8085/Productos/";

    setId(id:number){
      this.cid=this.cid+id;
    }


    getProductos(): Observable<any> {
      return this.http.get(this.consultar);
    }

    getProductosId(): Observable<any> {
      return this.http.get(this.cid);
    } 
    

    handleError(error: { error: { message: string; }; status: any; message: any; }) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
     }

  }