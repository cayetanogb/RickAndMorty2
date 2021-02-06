import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { CharacterResults } from '../models/character-results';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  characters: Character[] = [];

  constructor(private _character: CharacterService) {
    // Almacena el resultado de los personajes en el array de characters
    this._character.getCharacters().subscribe( res => {
      this.characters = res.results;
    });
  }

  ngOnInit() {
    // Almacena el resultado de los personajes en la variable _character
    this._character.getCharacters()
      .subscribe( (res: CharacterResults) => {
        const temp: CharacterResults = res;
        this.characters = temp.results;
      });
  }

}
