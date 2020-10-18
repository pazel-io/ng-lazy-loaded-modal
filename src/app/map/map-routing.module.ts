import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map.component';

const routes: Routes = [
  {
    path: '',
    outlet: 'map-outlet',
    component: MapComponent,
    children: [
      {
        path: 'modal',
        loadChildren: () => import('../modal-wrapper/modal-wrapper.module')
          .then((m) => m.ModalWrapperModule),
      },
    ],
  },
];

@NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
          })
export class MapRoutingModule {
}
