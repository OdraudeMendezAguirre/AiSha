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
import { ProductbarComponent } from './productbar/productbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductoService } from './productos.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    TicketComponent,
    ProductbarComponent,
    FooterComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
