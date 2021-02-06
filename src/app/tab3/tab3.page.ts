import { Component, OnInit } from '@angular/core';
import { Episode } from '../models/episode';
import { EpisodeResults } from '../models/episode-results';
import { EpisodeService } from '../services/episode.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  episodes: Episode[] = [];

  constructor(private _episode: EpisodeService) {
    // Almacena el resultado de los episodios
    this._episode.getEpisodes().subscribe( res => {
      this.episodes = res.results;
    });
  }

  ngOnInit() {
    this._episode.getEpisodes().subscribe( (res: EpisodeResults) => {
      const temp: EpisodeResults = res;
      this.episodes = temp.results;
    });
  }

}
