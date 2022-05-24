import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { IndexComponent } from './index/index.component';
import { IniciasesComponent } from './iniciases/iniciases.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { NotaComponent } from './nota/nota.component';
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
  path: 'productoId/:id',
  component: VistaProductoComponent
},
{
  path: 'carrito',
  component: CarritoComponent
},
{
  path: 'nota/:id',
  component: NotaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
