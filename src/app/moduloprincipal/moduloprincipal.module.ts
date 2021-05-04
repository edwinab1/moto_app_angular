import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloprincipalRoutingModule } from './moduloprincipal-routing.module';
import { ComponenteAdmin } from './admin/admin.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';


@NgModule({
  declarations: [
    ComponenteAdmin,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ModuloprincipalRoutingModule
  ]
})
export class ModuloprincipalModule { }
