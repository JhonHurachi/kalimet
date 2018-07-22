import { OrdenesComponent } from './ordenes/ordenes.component';
import { MaterialModule } from './../material/material.module';
import { ProduccionRoutingModule } from './produccion-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenesProduccionComponent } from './ordenes-produccion/ordenes-produccion.component';
import { NuevoComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    CommonModule,
    ProduccionRoutingModule,
    MaterialModule
  ],
  declarations: [OrdenesProduccionComponent, OrdenesComponent, NuevoComponent]
})
export class ProduccionModule { }
