import { UtilsService } from './../../../../servicios/utils.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '../../../../../../node_modules/@angular/material';
import { Iproducto } from '../../../../interfaces/producto';

@Component({
  selector: 'kal-ver-productos',
  templateUrl: './ver-productos.component.html',
  styles: []
})
export class VerProductosComponent implements OnInit {

  productos:Array<Iproducto>=[]  

  constructor(
    private utilsService:UtilsService,
    private snackBar:MatSnackBar
  ) { }

  eliminarProducto(id:number){
    let headers = {}
    this.utilsService.deleteProducto(id, headers)
      .subscribe(
        (data)=>{            
          this.openAddSuccess("Producto eliminado", "Aceptar")       
          this.verProductos()
        },
        (error)=>{console.log(error)}
      )
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  verProductos(){
    this.utilsService.getProductos()
      .subscribe(
        (data)=>{          
          this.productos= data;
          console.log(data)
          console.log(this.productos)
        },
        (error)=>{
          console.log(error)
        }
      );
  }

  ngOnInit() {
    this.verProductos();
  }

}
