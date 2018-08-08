import { ActualizarProductoComponent } from './productos1/actualizar-producto/actualizar-producto.component';
import { ProductosComponent } from './productos1/productos/productos.component';
import { ActualizarTrabajosComponent } from './trabajos1/actualizar-trabajos/actualizar-trabajos.component';
import { NuevoTrabajoComponent } from './trabajos1/nuevo-trabajo/nuevo-trabajo.component';
import { VerTrabajosComponent } from './trabajos1/ver-trabajos/ver-trabajos.component';
import { TrabajosComponent } from './trabajos1/trabajos/trabajos.component';
import { ActualizarActivComponent } from './activs/actualizar-activ/actualizar-activ.component';
import { NuevoActivComponent } from './activs/nuevo-activ/nuevo-activ.component';
import { VerActivsComponent } from './activs/ver-activs/ver-activs.component';
import { ActivsComponent } from './activs/activs/activs.component';
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
import { NuevoProductoComponent } from './productos1/nuevo-producto/nuevo-producto.component';
import { VerProductosComponent } from './productos1/ver-productos/ver-productos.component';

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
          },
          {
            path:"activs",
            component: ActivsComponent,
            children:[
              {
                path:"lista",
                component: VerActivsComponent
              },
              {
                path:"nuevo",
                component: NuevoActivComponent
              },
              {
                path:"actualizar/:id",
                component: ActualizarActivComponent
              }
            ]
          },
          {
            path:"trabajos",
            component: TrabajosComponent,
            children:[
              {
                path:"lista",
                component: VerTrabajosComponent
              },
              {
                path:"nuevo",
                component: NuevoTrabajoComponent
              },
              {
                path:"actualizar/:id",
                component: ActualizarTrabajosComponent
              }
            ]
          },
          {
            path:"productos",
            component: ProductosComponent,
            children:[
              {
                path:"lista",
                component: VerProductosComponent
              },
              {
                path:"nuevo",
                component: NuevoProductoComponent
              },
              {
                path:"actualizar/:id",
                component: ActualizarProductoComponent
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
