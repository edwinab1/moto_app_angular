import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteAdmin } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'login', component: ComponenteAdmin
  },
  {
    path: 'admin', component: ComponenteAdmin
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloprincipalRoutingModule { }
