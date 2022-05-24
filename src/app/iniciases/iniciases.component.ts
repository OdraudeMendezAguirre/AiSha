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
  mensaje=""

  iniciar(){
    if(this.contrasena=="aisha"){
      this.mensaje="Aisha Admin"
      return ("Inicio sesion correctamente");
    }else{
      return("Datos erroneos");
    }
  }

}
