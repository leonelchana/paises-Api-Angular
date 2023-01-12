import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino:string='';
  paises:Country[]=[];
  capitalSugeridos :Country[]=[];
  hayError:boolean=false;
  
  constructor(private paisService:PaisService){}
  buscar(termino:string){
    this.hayError = false;
    this.termino=termino;
    this.paisService.buscarCapital(this.termino)
    .subscribe(
      (paises) => {
        console.log(paises);
        this.paises=paises;
      },
      (err) => {
        console.log('ERRor');
        
        this.hayError = true;
        this.paises=[];
      }
    );
  }/* 
  sugerencias(termino:string){
    this.hayError=false;
    this.termino=termino;
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises=paises;
      },
      (err) => {
        console.log('ERRor');
        
        this.hayError = true;
        this.paises=[];
      }
    );    

  } */
  sugerencias(termino: string) {
    this.hayError = false;
    this.paisService.buscarCapital(termino)
      .subscribe(paises => {this.capitalSugeridos = paises.splice(0, 4);
      console.log(this.capitalSugeridos)
      }
      
     /*  ,(err)=>this.paisesSugeridos=[] */
      
      );
  }
}
