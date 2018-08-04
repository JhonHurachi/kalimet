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
    ActualizarTrabajadorComponent
  ],
  providers:[
    EmpresasService
  ]
})
export class MantenimientoModule { }
