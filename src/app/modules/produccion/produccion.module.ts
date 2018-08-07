import { IndexPipe } from './../../pipes/index.pipe';
import { Hora } from './cronograma/hora';
import { Trabajo } from './nuevo/dialogs/trabajo';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { MaterialModule } from '../material/material.module';
import { ProduccionRoutingModule } from './produccion-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenesProduccionComponent } from './ordenes-produccion/ordenes-produccion.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { Adicional } from './nuevo/dialogs/adicional';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { TrabajadoresPipe } from '../../pipes/trabajadores.pipe';

@NgModule({
  imports: [
    CommonModule,
    ProduccionRoutingModule,
    MaterialModule
  ],
  declarations: [
    OrdenesProduccionComponent, 
    OrdenesComponent, 
    NuevoComponent, 
    Adicional, 
    Trabajo, 
    Hora,
    CronogramaComponent,
    TrabajadoresPipe,
    IndexPipe],
  entryComponents:[
    Adicional,
    Trabajo,
    Hora
  ],
})
export class ProduccionModule { }
