import { Component, OnInit } from '@angular/core';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-iniciases',
  templateUrl: './iniciases.component.html',
  styleUrls: ['./iniciases.component.css']
})
export class IniciasesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  contrasena="";
  correo="";
  path="";
  mensaje=""

  iniciar(){
    if(this.contrasena=="aisha"){
      let index: IndexComponent = new IndexComponent();
      this.mensaje="Aisha Admin"
      index.guardarUsuarioIndex(this.mensaje);
      this.path="localhost:4200/index";
      return ("Inicio sesion correctamente");
    }else{
      this.path="localhost:4200/iniciar-sesion"
      return("Datos erroneos");
    }
  }

}
