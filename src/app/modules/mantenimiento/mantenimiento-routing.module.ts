import { ActualizarTrabajadorComponent } from './trabajadores/actualizar-trabajador/actualizar-trabajador.component';
import { NuevoTrabajadorComponent } from './trabajadores/nuevo-trabajador/nuevo-trabajador.component';
import { VerEmpresasComponent } from './ver-empresas/ver-empresas.component';
import { ActualizarEmpresaComponent } from './actualizar-empresa/actualizar-empresa.component';
import { NuevaEmpresaComponent } from './nueva-empresa/nueva-empresa.component';
import { MenuMantenimientoComponent } from './menu-mantenimiento/menu-mantenimiento.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerTrabajadoresComponent } from './trabajadores/ver-trabajadores/ver-trabajadores.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores/trabajadores.component';

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
                  path: "actualizar/:id",
                  component: ActualizarEmpresaComponent
                },
                {
                  path: "lista",
                  component: VerEmpresasComponent
                }
              ]
          },
          {
            path:"trabajadores",
            component: TrabajadoresComponent,
            children:[
              {
                path:"lista",
                component: VerTrabajadoresComponent
              },
              {
                path: "nuevo",
                component: NuevoTrabajadorComponent
              },
              {
                path: "actualizar/:id",
                component: ActualizarTrabajadorComponent
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
