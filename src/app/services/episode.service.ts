import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../models/episode';
import { EpisodeResults } from '../models/episode-results';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private url: string = 'https://rickandmortyapi.com/api/episode';

  constructor(private _http: HttpClient) { }

  // Devuelve todos los episodios
  getEpisodes(): Observable<EpisodeResults> {
    return this._http.get<EpisodeResults>(this.url);
  }

  // Devuelve el episodio seleccionado
  getEpisode(id): Observable<Episode> {
    if (id) return this._http.get<Episode>(this.url+'/'+id);
  }
}
