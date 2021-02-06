import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';
import { LocationResults } from '../models/location-results';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  locations: Location[] = [];
  texto = '';

  constructor(private _location: LocationService) {
    // Almacena el resultado de las ubicaciones en el array locations
    this._location.getLocations().subscribe( res => {
      this.locations = res.results;
    });
  }

  ngOnInit() {
    this._location.getLocations()
      .subscribe( (res: LocationResults) => {
        const temp: LocationResults = res;
        this.locations = temp.results;
      })
  }

  buscar(e) {
    this.texto = e.detail.value;
  }

}
