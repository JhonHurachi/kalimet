import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from './../../../../servicios/utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '../../../../../../node_modules/@angular/material';

@Component({
  selector: 'kal-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styles: []
})
export class NuevoProductoComponent implements OnInit {

  productoForm: FormGroup;

  constructor(
    private utilsService:UtilsService,
    private fb: FormBuilder, 
    private snackBar: MatSnackBar,
    private router: Router
  ) { 
    this.productoForm = this.fb.group({
      'producto':[null, Validators.required]
    })
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addProducto(producto){
    console.log(producto)
    let headers = {
      'Content-Type': 'application/json'
    }
    this.utilsService.setProducto(producto, headers)
      .subscribe(
        (data)=>{
              console.log('Exito');
              this.openAddSuccess("Producto añadido", "Aceptar")
              this.router.navigate(["mantenimientos/productos/lista"]);
        },
        (error)=>{console.log(error)}
      );
  }


  ngOnInit() {
  }

}
