import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Entidades/Usuario';
import { UsuarioService } from '../usuarios.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  constructor(public usuarioService:UsuarioService) { }
  ngOnInit(): void {
  }
  
  contrasena="";
  correo="";
  mensaje="";
  registro(){
    let usr:Usuario=new Usuario();
    usr.contrasena=this.contrasena;
    usr.correo=this.correo;
    this.usuarioService.guardar(usr).subscribe(resp=>{ 
    },
      error=> {console.error(error)}
    )
    this.mensaje="Registro Correcto";
    return (this.mensaje);
  }
}
