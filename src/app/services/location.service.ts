import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosRegionalesService {

  private apiUrl= 'https://dev.matiivilla.cl/duoc/location/region';

  constructor(private http: HttpClient) {}



  obtenerRegiones():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  obtenerComunas():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}

@Injectable({
  providedIn: 'root'
})
export class DatosComunalesService  {

  private apiUrl= 'https://dev.matiivilla.cl/duoc/location/comuna/7';

  constructor(private http: HttpClient) {}

  obtenerComunas() {
    return this.http.get<any>(this.apiUrl);
/*     return this.http.get(`${this.apiUrl}${regionId}`); */
  }
}
