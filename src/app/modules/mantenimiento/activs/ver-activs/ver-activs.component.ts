import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../../servicios/utils.service';
import { MatSnackBar } from '../../../../../../node_modules/@angular/material';

@Component({
  selector: 'kal-ver-activs',
  templateUrl: './ver-activs.component.html',
  styleUrls: ['./ver-activs.component.css']
})
export class VerActivsComponent implements OnInit {

  activs:Array<any>=[]

  constructor(
    private utilsService:UtilsService,
    private snackBar: MatSnackBar
  ) { }

  eliminarActiv(id:number){
    let headers = {}
    this.utilsService.deleteActiv(id, headers)
      .subscribe(
        (data)=>{            
          this.openAddSuccess("Actividad eliminada", "Aceptar")       
          this.verActivs()
        },
        (error)=>{console.log(error)}
      )
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  verActivs(){
    this.utilsService.getActivs()
      .subscribe(
        (data)=>{          
          this.activs= data;
        },
        (error)=>{
          console.log(error)
        }
      );
  }

  ngOnInit() {
    this.verActivs();
  }
}
