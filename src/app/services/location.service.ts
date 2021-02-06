import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../models/location';
import { LocationResults } from '../models/location-results';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  // Almacenamos los datos de las ubicaciones
  private url: string = 'https://rickandmortyapi.com/api/location';

  constructor(private _http: HttpClient) { }

  // Devuelve todas las ubicaciones
  getLocations(): Observable<LocationResults> {
    return this._http.get<LocationResults>(this.url);
  }

  // Devuelve la ubicacion seleccionada
  getLocation(id): Observable<Location> {
    if (id) return this._http.get<Location>(this.url+'/'+id);
  }
}
