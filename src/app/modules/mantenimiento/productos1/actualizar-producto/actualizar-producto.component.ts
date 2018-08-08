import { Iproducto } from './../../../../interfaces/producto';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '../../../../../../node_modules/@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '../../../../../../node_modules/@angular/router';
import { UtilsService } from './../../../../servicios/utils.service';

@Component({
  selector: 'kal-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styles: []
})
export class ActualizarProductoComponent implements OnInit {

  productoForm: FormGroup;
  sub: any;
  producto:Iproducto

  constructor(
    private utilsService:UtilsService,
    private snackBar:MatSnackBar,    
    private router: Router,
    private fb: FormBuilder, 
    private route:ActivatedRoute,
    
  ) { 
    this.productoForm = this.fb.group({
      'codigo':[null, Validators.required],
      'descripcion':[null, Validators.required]
    })
  }

  updateProducto(producto){
    let headers = {
      'Content-Type': 'application/json'
    }
    this.utilsService.updateProducto(producto, headers)
      .subscribe(
        (data)=>{
              console.log('Exito');
              this.openAddSuccess("Producto actualizado", "Aceptar")
              this.router.navigate(["mantenimientos/productos/lista"]);
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
      this.utilsService.getProducto(+params['id'])
      .subscribe(
        (data)=>{
          this.producto = {codigo:+params['id'],descripcion:data.descripcion}
          this.productoForm.setValue(this.producto)
        }
      );
  });
  }

}
