import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { EmpresasComponent } from './empresas/empresas.component';
import { MenuMantenimientoComponent } from './menu-mantenimiento/menu-mantenimiento.component';
import { NuevaEmpresaComponent } from './nueva-empresa/nueva-empresa.component';
import { ActualizarEmpresaComponent } from './actualizar-empresa/actualizar-empresa.component';
import { VerEmpresasComponent } from './ver-empresas/ver-empresas.component';

@NgModule({
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    MaterialModule
  ],
  declarations: [
    EmpresasComponent, 
    MenuMantenimientoComponent, 
    NuevaEmpresaComponent, 
    ActualizarEmpresaComponent, VerEmpresasComponent
  ]
})
export class MantenimientoModule { }
