import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IniciasesComponent } from './iniciases/iniciases.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NotaComponent } from './nota/nota.component';
import { FooterComponent } from './footer/footer.component';
import { ProductoService } from './productos.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { UsuarioService } from './usuarios.service';
import { VentaService } from './ventas.service';
import { TicketService } from './ticket.service';
import { CarritoService } from './carrito.service';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    RegistrarseComponent,
    IniciasesComponent,
    CarritoComponent,
    NotaComponent,
    FooterComponent,
    VistaProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductoService, UsuarioService, VentaService, TicketService, CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
