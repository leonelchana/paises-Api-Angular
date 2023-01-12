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
  hayError:boolean=false;
  
  constructor(private paisService:PaisService){}
  buscar(termino:string){
    this.hayError = false;
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
  }
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

  }
}
