import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloprincipalRoutingModule } from './moduloprincipal-routing.module';
import { ComponenteAdmin } from './admin/admin.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { CategoriasComponent } from './admin/categorias/categorias.component';
import { CrearComponent } from './admin/productos/crear/crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarproductoComponent } from './admin/productos/editarproducto/editarproducto.component';
import { BuscarpipePipe } from './admin/pipes/buscarpipe.pipe';
import { TraducirPipe } from './admin/productos/pipes/traducir.pipe';
import { MonedaPipe } from './admin/productos/pipes/moneda.pipe';


@NgModule({
  declarations: [
    ComponenteAdmin,
    NavbarComponent,
    SidebarComponent,
    ProductosComponent,
    CategoriasComponent,
    CrearComponent,
    EditarproductoComponent,
    BuscarpipePipe,
    TraducirPipe,
    MonedaPipe
  
  ],
  imports: [
    CommonModule,
    ModuloprincipalRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ModuloprincipalModule { }
