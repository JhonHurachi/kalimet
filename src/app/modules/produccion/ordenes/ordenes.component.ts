import { OrdenesService } from './../../../servicios/ordenes.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'kal-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  ordenes:Array<any>=[];

  constructor(
    private snackBar: MatSnackBar,
    private ordenesService: OrdenesService
  ) { }

  eliminarOrden(id:String){
    let headers = {}
    this.ordenesService.deleteEmpresa(id, headers)
      .subscribe(
        (data)=>{            
          this.openAddSuccess("Empresa eliminada", "Aceptar")       
          this.verOrdenes()
        },
        (error)=>{console.log(error)}
      )
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  verOrdenes(){
    this.ordenesService.getOrdenes()
      .subscribe(
        (data)=>{          
          this.ordenes = data;
        },
        (error)=>{
          console.log(error)
        }
      );
  }

  ngOnInit() {
    this.verOrdenes();
  }

}
