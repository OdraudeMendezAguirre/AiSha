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
    
    changeProducto(goal: any){
      this.productos.next(goal)
    }
    
    consultarTodos = 'http://localhost:8080/Productos';
    consultarId = 'http://localhost:8080';

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'GET' 
        })
    }

    getProductos(): Observable<Producto> {
        return this.http.get<Producto>(this.consultarTodos, this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    } 

    getProductoId(id:number): Observable<Producto>{
        return this.http.get<Producto>(this.consultarId + '/Productos/' +id , this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
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