import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { CharacterResults } from '../models/character-results';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  // Almacenamos los datos de los personajes
  private url: string = 'https://rickandmortyapi.com/api/character';

  constructor(private _http: HttpClient) { }

  // Devuelve todas los personajes
  getCharacters(): Observable<CharacterResults> {
    return this._http.get<CharacterResults>(this.url);
  }

  // Devuelve el personaje seleccionado
  getCharacter(id): Observable<Character> {
    if (id) return this._http.get<Character>(this.url+'/'+id);
  }
}
