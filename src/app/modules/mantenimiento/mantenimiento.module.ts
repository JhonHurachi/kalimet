import { EmpresasService } from './../../servicios/empresas.service';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { EmpresasComponent } from './empresas/empresas.component';
import { MenuMantenimientoComponent } from './menu-mantenimiento/menu-mantenimiento.component';
import { NuevaEmpresaComponent } from './nueva-empresa/nueva-empresa.component';
import { ActualizarEmpresaComponent } from './actualizar-empresa/actualizar-empresa.component';
import { VerEmpresasComponent } from './ver-empresas/ver-empresas.component';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { VerTrabajadoresComponent } from './trabajadores/ver-trabajadores/ver-trabajadores.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores/trabajadores.component';
import { NuevoTrabajadorComponent } from './trabajadores/nuevo-trabajador/nuevo-trabajador.component';
import { ActualizarTrabajadorComponent } from './trabajadores/actualizar-trabajador/actualizar-trabajador.component';
import { VerActivsComponent } from './activs/ver-activs/ver-activs.component';
import { ActivsComponent } from './activs/activs/activs.component';
import { ActualizarActivComponent } from './activs/actualizar-activ/actualizar-activ.component';
import { NuevoActivComponent } from './activs/nuevo-activ/nuevo-activ.component';
import { TrabajosComponent } from './trabajos1/trabajos/trabajos.component';
import { ProductosComponent } from './productos1/productos/productos.component';
import { ActualizarProductoComponent } from './productos1/actualizar-producto/actualizar-producto.component';
import { NuevoProductoComponent } from './productos1/nuevo-producto/nuevo-producto.component';
import { VerProductosComponent } from './productos1/ver-productos/ver-productos.component';
import { VerTrabajosComponent } from './trabajos1/ver-trabajos/ver-trabajos.component';
import { ActualizarTrabajosComponent } from './trabajos1/actualizar-trabajos/actualizar-trabajos.component';
import { NuevoTrabajoComponent } from './trabajos1/nuevo-trabajo/nuevo-trabajo.component';

@NgModule({
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    EmpresasComponent, 
    MenuMantenimientoComponent, 
    NuevaEmpresaComponent, 
    ActualizarEmpresaComponent, 
    VerEmpresasComponent,
    VerTrabajadoresComponent,
    TrabajadoresComponent,
    NuevoTrabajadorComponent,
    ActualizarTrabajadorComponent,
    VerActivsComponent,
    ActivsComponent,
    ActualizarActivComponent,
    NuevoActivComponent,
    TrabajosComponent,
    ProductosComponent,
    ActualizarProductoComponent,
    NuevoProductoComponent,
    VerProductosComponent,
    VerTrabajosComponent,
    ActualizarTrabajosComponent,
    NuevoTrabajoComponent
  ],
  providers:[
    EmpresasService
  ]
})
export class MantenimientoModule { }
