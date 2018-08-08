import { Router } from '@angular/router';
import { UtilsService } from './../../../../servicios/utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '../../../../../../node_modules/@angular/material';

@Component({
  selector: 'kal-nuevo-trabajo',
  templateUrl: './nuevo-trabajo.component.html',
  styles: []
})
export class NuevoTrabajoComponent implements OnInit {

  trabajoForm: FormGroup;

  constructor(
    private utilsService:UtilsService,
    private fb: FormBuilder, 
    private snackBar: MatSnackBar,
    private router: Router
  ) { 
    this.trabajoForm = this.fb.group({
      'trabajo':[null, Validators.required]
    })
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addTrabajo(trabajo){
    console.log(trabajo)
    let headers = {
      'Content-Type': 'application/json'
    }
    this.utilsService.setTrabajo(trabajo, headers)
      .subscribe(
        (data)=>{
              console.log('Exito');
              this.openAddSuccess("Trabajo añadido", "Aceptar")
              this.router.navigate(["mantenimientos/trabajos/lista"]);
        },
        (error)=>{console.log(error)}
      );
  }

  ngOnInit() {
  }

}
