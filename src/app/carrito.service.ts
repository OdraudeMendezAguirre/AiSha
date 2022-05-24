import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CarritoService{
    private api="http://localhost:8085/Carrito/";
    private vacio="http://localhost:8085/Carrito/vaciar";

    constructor(private http: HttpClient){}

    public agregar(item:any):Observable<any>{
        return this.http.post(this.api,item);
    }

    public getAll():Observable<any>{
        return this.http.get(this.api);
    }

    public eliminar(id: number):Observable<any>{
        this.api=this.api+id;
        return this.http.delete(this.api);
    }

    public vaciar():Observable<any>{
        return this.http.delete(this.vacio);
    }
}