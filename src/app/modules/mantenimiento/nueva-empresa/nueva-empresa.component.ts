import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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

  constructor(private fb: FormBuilder) {
    this.empresaForm = fb.group({
      'pais':[null, Validators.required],
      'ruc': [null, Validators.compose([Validators.required, Validators.pattern("^[0-9]{12}$")])],
      'razonsocial': [],
      'contribuyente': []
    })
   }

  addEmpresa(post){
    alert("empresa añadida")
  }

  tipoEmpresa = new FormControl();


  ngOnInit() {
  }

}
