import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteAdmin } from './admin/admin.component';
import { CategoriasComponent } from './admin/categorias/categorias.component';
import { CrearComponent } from './admin/productos/crear/crear.component';
import { ProductosComponent } from './admin/productos/productos.component';

const routes: Routes = [
  {
    path: 'login', component: ComponenteAdmin
  },
  {
    path: 'admin', component: ComponenteAdmin,
    children: [
      {
        path: 'productos', component: ProductosComponent,
      },
      {
        path: 'categorias', component: CategoriasComponent
      }
      ,
      {
        path: 'productos/crear', component: CrearComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloprincipalRoutingModule { }
