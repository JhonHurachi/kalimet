import { TrabajadoresService } from './../../../../servicios/trabajadores.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '../../../../../../node_modules/@angular/material';
import { Router } from '../../../../../../node_modules/@angular/router';
import { UtilsService } from '../../../../servicios/utils.service';

@Component({
  selector: 'kal-nuevo-trabajador',
  templateUrl: './nuevo-trabajador.component.html',
  styleUrls: ['./nuevo-trabajador.component.css']
})
export class NuevoTrabajadorComponent implements OnInit {

  trabajadorForm: FormGroup;
  trab: any;
  tipos_doc: Array<any>=[];
  tipos_cont: Array<any>=[];
  cargos: Array<any>=[];
  minDate = new Date(1930, 0, 1);
  maxDate = new Date(2000, 0, 1);


  constructor(
    private fb: FormBuilder, 
    private snackBar: MatSnackBar,
    private router: Router, 
    private trabajadorService:TrabajadoresService,
    private utilsService:UtilsService,
  ) { 
    this.trabajadorForm = this.fb.group({
      'tipo_doc':[null, Validators.required],
      'tipo_cont': [null, Validators.compose([Validators.required])],
      'doc': [null, Validators.compose([Validators.required])],
      'fecnac':[new Date(), Validators.required],
      'ape_pat': [null, Validators.compose([Validators.required])],
      'ape_mat': [null, Validators.compose([Validators.required])],
      'primer_nombre': [null, Validators.compose([Validators.required])],
      'segundo_nombre': [''],
      'direccion': [''],
      'telefono': ['', Validators.compose([Validators.pattern("^[0-9]{9}$")])],
      'mail': ['', Validators.compose([Validators.email])],
      'cargo': [null, Validators.compose([Validators.required])]

    })

  }

  addTrabajador(trabajador){
    let headers = {
      'Content-Type': 'application/json'
    }
    this.trabajadorService.setTrabajador(trabajador, headers)
      .subscribe(
        (data)=>{
              console.log('Exito');
              this.openAddSuccess("Trabajador añadido", "Aceptar")
              this.mostrarTrabajadores();
        },
        (error)=>{console.log(error)}
      );
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  mostrarTrabajadores(){
    this.router.navigate(["mantenimientos/trabajadores/lista"]);
  }

  ngOnInit() {
    this.utilsService.getContribuyentes()
    .subscribe(
      (data)=>{
        this.tipos_cont= data;
      }
    );

    this.utilsService.getTiposDocumento()
    .subscribe(
      (data)=>{
        this.tipos_doc= data;
      }
    );

    this.utilsService.getCargos()
    .subscribe(
      (data)=>{
        this.cargos= data;
      }
    );
  }

}
