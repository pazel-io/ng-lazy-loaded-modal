import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  options = {
    zoom: 5,
    maxZoom: 18,
    preferCanvas: true,
    attributionControl: true,
    center: [
      -28.690259,
      131.5190514,
    ],
    layers: [
      new TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ]
  };

  constructor(private router: Router) {}

  public openModal(): void {
    this.router.navigate(['map', {outlets: {['map-outlet']: ['modal']}}]);
  }
}
