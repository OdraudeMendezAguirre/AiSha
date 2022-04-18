import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ProductoComponent } from './producto/producto.component';
import { IniciasesComponent } from './iniciases/iniciases.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NotaComponent } from './nota/nota.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    RegistrarseComponent,
    ProductoComponent,
    IniciasesComponent,
    CarritoComponent,
    NotaComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
