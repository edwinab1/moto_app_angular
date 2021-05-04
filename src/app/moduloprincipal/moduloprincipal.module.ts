import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloprincipalRoutingModule } from './moduloprincipal-routing.module';
import { ComponenteAdmin } from './admin/admin.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { CategoriasComponent } from './admin/categorias/categorias.component';
import { CrearComponent } from './admin/productos/crear/crear.component';


@NgModule({
  declarations: [
    ComponenteAdmin,
    NavbarComponent,
    SidebarComponent,
    ProductosComponent,
    CategoriasComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    ModuloprincipalRoutingModule
  ]
})
export class ModuloprincipalModule { }
