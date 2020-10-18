import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalWrapperComponent } from './modal-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: ModalWrapperComponent,
  },
];

@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  },
)
export class ModalWrapperRoutingModule {
}
