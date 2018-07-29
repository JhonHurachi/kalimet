import { VerEmpresasComponent } from './ver-empresas/ver-empresas.component';
import { ActualizarEmpresaComponent } from './actualizar-empresa/actualizar-empresa.component';
import { NuevaEmpresaComponent } from './nueva-empresa/nueva-empresa.component';
import { MenuMantenimientoComponent } from './menu-mantenimiento/menu-mantenimiento.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path:"",
      component: MenuMantenimientoComponent,
      children: [
          {
              path: "empresas",
              component: EmpresasComponent,
              children:[
                {
                  path: "nuevo",
                  component: NuevaEmpresaComponent
                },
                {
                  path: "actualizar",
                  component: ActualizarEmpresaComponent
                },
                {
                  path: "lista",
                  component: VerEmpresasComponent
                }
              ]
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
