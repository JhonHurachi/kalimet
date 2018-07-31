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
    ActualizarEmpresaComponent, VerEmpresasComponent
  ],
  providers:[
    EmpresasService
  ]
})
export class MantenimientoModule { }
