import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId: number;
  character: Character;
  character$: Observable<Character>;

  constructor(private activateRoute: ActivatedRoute, private _character: CharacterService) { }

  ngOnInit() {
    // Almacenamos el id del personaje
    this.profileId = parseInt(this.activateRoute.snapshot.paramMap.get('id'), 10);

    // Almacenamos la informacion del personaje seleccionado
    this.character$ = this._character.getCharacter(this.profileId);
  }

}
