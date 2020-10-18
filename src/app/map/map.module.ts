import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { RouterModule } from '@angular/router';
import { MapRoutingModule } from './map-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    RouterModule,
    MapRoutingModule,
    MatButtonModule,
    LeafletModule,
  ]
})
export class MapModule { }
