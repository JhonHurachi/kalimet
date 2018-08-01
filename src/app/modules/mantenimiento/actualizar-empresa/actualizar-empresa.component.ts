import { EmpresasService } from './../../../servicios/empresas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '../../../../../node_modules/@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../../../servicios/utils.service';

export interface Empresa {
  id: String,
  pais: Number,
  ruc: String,
  raz: String,
  contribuyente: Number

}

@Component({
  selector: 'kal-actualizar-empresa',
  templateUrl: './actualizar-empresa.component.html',
  styleUrls: ['./actualizar-empresa.component.css']
})
export class ActualizarEmpresaComponent implements OnInit {

  id:String = "hola"
  sub: any;
  empresaForm: FormGroup
  post: any
  paises: Array<any>
  tiposcon: Array<any>  
  empresa: Empresa = {
    id: '',
    pais: 1,
    ruc: '',
    raz: '',
    contribuyente: 1
  }

  constructor(
    private route:ActivatedRoute,
    private fb: FormBuilder, 
    private snackBar: MatSnackBar, 
    private router: Router, 
    private empresasService:EmpresasService,
    private utilsService:UtilsService
  ) { 
    this.empresaForm = this.fb.group({
      'id':[null, Validators.required],
      'pais':[null, Validators.required],
      'ruc': [null, Validators.compose([Validators.required, Validators.pattern("^[0-9]{11}$")])],
      'raz': [null, Validators.compose([Validators.required])],
      'contribuyente': [null, Validators.required]
    })
  }

  updateEmpresa(empresa){
    let headers = {
      'Content-Type': 'application/json'
    }
    this.empresasService.updateEmpresa(empresa, headers)
      .subscribe(
        (data)=>{
              this.openAddSuccess("Empresa actualizada", "Aceptar")
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
    this.sub = this.route.params.subscribe(params => {
      this.empresasService.getEmpresa(params['id'])
      .subscribe(
        (data)=>{
          this.empresa.id = params['id'];
          this.empresa.contribuyente = data.tipo_contribuyente_cli;
          this.empresa.pais = data.pais_emp_cli;
          this.empresa.raz = data.raz_soc_emp_cli;
          this.empresa.ruc = data.ruc_emp_cli;
          this.empresaForm.setValue(this.empresa)
        }
      );
   });

    this.utilsService.getPaises()
        .subscribe(
          (data)=>{
            this.paises = data;
          }
        );

      this.utilsService.getContribuyentes()
      .subscribe(
        (data)=>{
          this.tiposcon= data;
        }
      );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
