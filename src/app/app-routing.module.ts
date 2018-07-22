import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'produccion',
    loadChildren: './modules/produccion/produccion.module#ProduccionModule'
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
