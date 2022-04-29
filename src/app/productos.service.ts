import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Producto } from './Entidades/Producto';
@Injectable({
    providedIn: 'root'
  })
  export class ProductoService{
    private productos = new BehaviorSubject<any>(['id_producto', 'n_prod', 'p_prod', 'd_prod', 'almcn_prod', 'img_prod']);
    producto=  this.productos.asObservable();

    constructor(private http: HttpClient) { }
    
    consultarTodos = "http://localhost:8080/Productos";
    consultarId = "http://localhost:8080/Productos/";


    getProductos(): Observable<any> {
      return this.http.get(this.consultarTodos);
    }
    getProductosId(id:number): Observable<any> {
      return this.http.get(this.consultarId+id);
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