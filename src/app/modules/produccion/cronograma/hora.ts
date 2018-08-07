import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'hora',
    templateUrl: 'hora.html',
    styleUrls: ['./cronograma.component.css'],
  })
  
  export class Hora implements OnInit {

    hora:number=0;
    min:number=0;
    tiempo:Object={hora:0,min:0}
      
    constructor(){} 
    
    addHora(){
        this.tiempo['hora']++
    }

    lessHora(){
        this.tiempo['hora']--;
        if(this.tiempo['hora']<=0){
            this.tiempo['hora']=0
        }
    }

    addMin(){
        this.tiempo['min']++;
        if(this.tiempo['min']==60){
            this.tiempo['min']=0
            this.tiempo['hora']++;
        }
    }

    lessMin(){
        this.tiempo['min']--;
        if(this.tiempo['min']<0){
            this.tiempo['min']=59;            
        }
    }

    ngOnInit(){
      
    }
  }