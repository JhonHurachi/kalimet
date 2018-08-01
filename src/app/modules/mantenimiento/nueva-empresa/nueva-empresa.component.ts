import { UtilsService } from './../../../servicios/utils.service';
import { EmpresasService } from './../../../servicios/empresas.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '../../../../../node_modules/@angular/material';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'kal-nueva-empresa',
  templateUrl: './nueva-empresa.component.html',
  styleUrls: ['./nueva-empresa.component.css']
})
export class NuevaEmpresaComponent implements OnInit {

  empresaForm: FormGroup
  post: any
  paises: Array<any>
  tiposcon: Array<any>  
  tipoEmpresa = new FormControl();

  constructor(
    private fb: FormBuilder, 
    private snackBar: MatSnackBar, 
    private router: Router, 
    private empresasService:EmpresasService,
    private utilsService:UtilsService
  ) {

    this.empresaForm = this.fb.group({
      'pais':[null, Validators.required],
      'ruc': [null, Validators.compose([Validators.required, Validators.pattern("^[0-9]{11}$")])],
      'raz': [null, Validators.compose([Validators.required])],
      'contribuyente': [null, Validators.required]
    })
   }

  addEmpresa(empresa){
    let headers = {
      'Content-Type': 'application/json'
    }
    this.empresasService.setEmpresa(empresa, headers)
      .subscribe(
        (data)=>{
              console.log('Exito');
              this.openAddSuccess("Empresa añadida", "Aceptar")
              this.mostrarEmpresas();
        },
        (error)=>{console.log(error)}
      );
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  mostrarEmpresas(){
    this.router.navigate(["mantenimientos/empresas/lista"]);
  }

  ngOnInit() {
    this.utilsService.getPaises()
      .subscribe(
        (data)=>{
          this.paises= data;
        }
      );

    this.utilsService.getContribuyentes()
    .subscribe(
      (data)=>{
        this.tiposcon= data;
      }
    );
  }

}
