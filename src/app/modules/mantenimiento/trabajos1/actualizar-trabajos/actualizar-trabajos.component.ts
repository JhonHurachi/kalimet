import { ITrabajo } from './../../../../interfaces/trabajo';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '../../../../../../node_modules/@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '../../../../../../node_modules/@angular/router';
import { UtilsService } from './../../../../servicios/utils.service';

@Component({
  selector: 'kal-actualizar-trabajos',
  templateUrl: './actualizar-trabajos.component.html',
  styles: []
})
export class ActualizarTrabajosComponent implements OnInit {

  
  trabajoForm: FormGroup;
  sub: any;
  trabajo: ITrabajo

  constructor(
    private utilsService:UtilsService,
    private snackBar:MatSnackBar,    
    private router: Router,
    private fb: FormBuilder, 
    private route:ActivatedRoute,
    
  ) { 
    this.trabajoForm = this.fb.group({
      'codigo':[null, Validators.required],
      'descripcion':[null, Validators.required]
    })
  }

  updateTrabajo(trabajo){
    let headers = {
      'Content-Type': 'application/json'
    }
    console.log(trabajo)
    this.utilsService.updateTrabajo(trabajo, headers)
      .subscribe(
        (data)=>{
              console.log('Exito');
              this.openAddSuccess("Trabajo actualizado", "Aceptar")
              this.router.navigate(["mantenimientos/trabajos/lista"]);
        },
        (error)=>{console.log(error)}
      );
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.utilsService.getTrabajo(+params['id'])
      .subscribe(
        (data)=>{
          this.trabajo = {codigo:+params['id'],descripcion:data.descripcion}
          this.trabajoForm.setValue(this.trabajo)
        }
      );
  });
  }
}
