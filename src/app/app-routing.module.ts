import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { IndexComponent } from './index/index.component';
import { IniciasesComponent } from './iniciases/iniciases.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductoComponent } from './producto/producto.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { TicketComponent } from './ticket/ticket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
  path: 'iniciar-sesion',
  component: IniciasesComponent
},
{
  path: 'registrarse',
  component: RegistrarseComponent
},
{
  path: 'ticket',
  component: TicketComponent
},
{
  path: 'registrarse',
  component: RegistrarseComponent
},
{
  path: 'producto/:id',
  component: ProductoComponent
},
{
  path: 'carrito',
  component: CarritoComponent
},
{
  path: 'producto',
  component: ProductItemComponent
},
{
  path: 'vistaProducto',
  component: VistaProductoComponent
},
{path:'navbar', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
