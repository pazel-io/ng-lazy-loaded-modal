import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalWrapperComponent } from './modal-wrapper.component';
import { ModalWrapperRoutingModule } from './modal-wrapper-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ModalComponent, ModalWrapperComponent],
    imports: [
        CommonModule,
        ModalWrapperRoutingModule,
        MatDialogModule,
        MatButtonModule,
    ]
})
export class ModalWrapperModule { }
