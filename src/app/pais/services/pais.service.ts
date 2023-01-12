import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Country } from '../interfaces/pais.interface';
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string='https://restcountries.com/v3.1';
  private apiu:string='https://restcountries.com/v2';
  
  constructor( private http:HttpClient) { }
  get Httparams(){
    return new HttpParams()
    .set('fields','flag,name,capital,population,flags,alpha2Code');
  }

  buscarPais(termino:string):Observable<Country[]>{
    const url=`${this.apiu}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.Httparams});

  }
  buscarCapital(termino:string):Observable<Country[]>{
    const url=`${this.apiu}/capital/${termino}`;
    console.log(termino);
    return this.http.get<Country[]>(url,{params:this.Httparams});

  }
  buscarRegion(region:string):Observable<Country[]>{
   
    const url=`${this.apiu}/region/${region}`;
    return this.http.get<Country[]>(url,{params:this.Httparams});
    

  }
  getPaisPorId(id:string):Observable<Country>{
    const url=`${this.apiu}/alpha/${id}`;
    return this.http.get<Country>(url);

  }
 

  

     
}
