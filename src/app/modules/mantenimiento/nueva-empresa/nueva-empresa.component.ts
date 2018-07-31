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
  paises: any = [
    {cod:"0001", desc:"Perú"},
    {cod:"0002", desc:"Argentina"},
    {cod:"0003", desc:"Chile"}
  ]

  tiposcon: any = [
    {cod:"0001", desc:"Sociedad Civil"},
    {cod:"0002", desc:"Sociedad Irregular"},
    {cod:"0003", desc:"Asociación en Participación"}
  ]

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    this.empresaForm = fb.group({
      'pais':[null, Validators.required],
      'ruc': [null, Validators.compose([Validators.required, Validators.pattern("^[0-9]{12}$")])],
      'razonsocial': [null, Validators.compose([Validators.required])],
      'contribuyente': [null, Validators.required]
    })
   }

  addEmpresa(empresa){
    this.openAddSuccess("Empresa añadida", "Aceptar")
    this.mostrarEmpresas()
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  mostrarEmpresas(){
    this.router.navigate(["mantenimientos/empresas/lista"]);
  }

  tipoEmpresa = new FormControl();


  ngOnInit() {
  }

}
