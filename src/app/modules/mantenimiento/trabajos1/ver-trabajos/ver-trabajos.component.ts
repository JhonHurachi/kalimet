import { UtilsService } from './../../../../servicios/utils.service';
import { Component, OnInit } from '@angular/core';
import { ITrabajo } from '../../../../interfaces/trabajo';
import { MatSnackBar } from '../../../../../../node_modules/@angular/material';

@Component({
  selector: 'kal-ver-trabajos',
  templateUrl: './ver-trabajos.component.html',
  styles: []
})
export class VerTrabajosComponent implements OnInit {

  trabajos:Array<ITrabajo>=[]

  constructor(
    private utilsService:UtilsService,
    private snackBar:MatSnackBar
  ) { }

  eliminarTrabajo(id:number){
    let headers = {}
    this.utilsService.deleteTrabajo(id, headers)
      .subscribe(
        (data)=>{            
          this.openAddSuccess("Trabajo eliminado", "Aceptar")       
          this.verTrabajos()
        },
        (error)=>{console.log(error)}
      )
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  verTrabajos(){
    this.utilsService.getTrabajos()
      .subscribe(
        (data)=>{          
          this.trabajos= data;
          console.log(data)
          console.log(this.trabajos)
        },
        (error)=>{
          console.log(error)
        }
      );
  }

  ngOnInit() {
    this.verTrabajos();
  }

}
