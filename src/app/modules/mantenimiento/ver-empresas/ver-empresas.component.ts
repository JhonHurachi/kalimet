import { EmpresasService } from './../../../servicios/empresas.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'kal-ver-empresas',
  templateUrl: './ver-empresas.component.html',
  styleUrls: ['./ver-empresas.component.css']
})
export class VerEmpresasComponent implements OnInit {

  empresas:any = []

  constructor(private empresasService:EmpresasService, private snackBar: MatSnackBar,) { }

  eliminarEmpresa(id:String){
    let headers = {}
    this.empresasService.deleteEmpresa(id, headers)
      .subscribe(
        (data)=>{            
          this.openAddSuccess("Empresa eliminada", "Aceptar")       
          this.verEmpresas()
        },
        (error)=>{console.log(error)}
      )
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  verEmpresas(){
    this.empresasService.getEmpresas()
      .subscribe(
        (data)=>{          
          this.empresas = data;
        },
        (error)=>{
          console.log(error)
        }
      );
  }

  ngOnInit() {
    this.verEmpresas()
  }
}
