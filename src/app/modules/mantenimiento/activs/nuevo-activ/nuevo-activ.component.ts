import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from './../../../../servicios/utils.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '../../../../../../node_modules/@angular/material';
import { Router } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'kal-nuevo-activ',
  templateUrl: './nuevo-activ.component.html',
  styleUrls: ['./nuevo-activ.component.css']
})
export class NuevoActivComponent implements OnInit {

  activForm: FormGroup;
  trab: any;

  constructor(
    private utilsService:UtilsService,
    private fb: FormBuilder, 
    private snackBar: MatSnackBar,
    private router: Router
  ) { 
    this.activForm = this.fb.group({
      'activ':[null, Validators.required]
    })
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addActiv(activ){
    console.log(activ)
    let headers = {
      'Content-Type': 'application/json'
    }
    this.utilsService.setActiv(activ, headers)
      .subscribe(
        (data)=>{
              console.log('Exito');
              this.openAddSuccess("Actividad añadida", "Aceptar")
              this.router.navigate(["mantenimientos/activs/lista"]);
        },
        (error)=>{console.log(error)}
      );
  }

  ngOnInit() {
  }

}
