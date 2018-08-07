import { Pipe, PipeTransform } from '@angular/core';
import { TrabajadoresService } from '../servicios/trabajadores.service';

@Pipe({
  name: 'trabajadoresPipe'
})
export class TrabajadoresPipe implements PipeTransform {

  constructor(private trabajadoresService:TrabajadoresService){}

  trabajador(value:number) {
    return new Promise(resolve => {
      this.trabajadoresService.getTrabajador(value)
      .subscribe(
        (data)=>{
          resolve(data.primer_nombre_trabajador);       
        },
        (error)=>{
          console.log(error)
        }
      )
    });
  }

  async obtener(value){
    let nombre=await this.trabajador(value)
      let nom = nombre.toString()
      console.log(nom)
      console.log(typeof(nom))
      return nom
  }

  transform(value: number):string{
    let nombre="sssss"
    this.obtener(value).then(
      v=>{nombre=v}
    )
    return nombre    
  }

}
