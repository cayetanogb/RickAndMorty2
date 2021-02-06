import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/models/episode';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {

  episodeId: number;
  episode$: Observable<Episode>;

  constructor(private activatedRoute: ActivatedRoute, private _episode: EpisodeService) { }

  ngOnInit() {
    // Almacenamos el id del episodio
    this.episodeId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);

    // Almacenamos la informacion del episodio seleccionado
    this.episode$ = this._episode.getEpisode(this.episodeId);
  }

}
