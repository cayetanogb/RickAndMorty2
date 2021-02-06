import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from 'src/app/models/location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  locationId: number;
  location$: Observable<Location>;
  resident: string;

  constructor(private activateRoute: ActivatedRoute, private _location: LocationService) { }

  ngOnInit() {
    // Almacenamos el id de la ubicacion
    this.locationId = parseInt(this.activateRoute.snapshot.paramMap.get('id'), 10);

    // Almacenamos la informacion de la ubicacion seleccionada
    this.location$ = this._location.getLocation(this.locationId);
  }

}
