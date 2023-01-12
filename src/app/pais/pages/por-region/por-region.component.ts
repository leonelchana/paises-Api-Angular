import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: ['button{margin-right:5px;}'],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  paises:Country[]=[];
  regionActiva: string = '';

  activarRegion(region: string) {
    this.regionActiva = region;
    this.paisService.buscarRegion(region)
      .subscribe(paises=>{
        console.log(paises)
        this.paises=paises;
      })
  }
  getClaseCSS(css: string) {
    return css == this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  constructor(private paisService: PaisService) {}
  ngOnInit(): void {}
}
