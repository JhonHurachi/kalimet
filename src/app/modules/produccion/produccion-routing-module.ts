import { CronogramaComponent } from './cronograma/cronograma.component';
import { EmpresasComponent } from './../mantenimiento/empresas/empresas.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { OrdenesProduccionComponent } from './ordenes-produccion/ordenes-produccion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdenesComponent } from './ordenes/ordenes.component';

const routes: Routes = [
    {
        path:"",
        component: OrdenesProduccionComponent,
        children: [
            {
                path: "ordenes",
                component: OrdenesComponent,
            },
            {
                path: "nuevo",
                component: NuevoComponent
            },
            {
                path: "",
                redirectTo: "ordenes",
                pathMatch: "full"
            },
            {
                path:"orden/:id",
                component:CronogramaComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduccionRoutingModule { }