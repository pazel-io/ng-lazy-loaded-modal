import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-wrapper',
  template: '',
})
export class ModalWrapperComponent implements OnInit, OnDestroy {

  private dialogRef: MatDialogRef<ModalComponent>;
  private closedOnDestroy = false;

  constructor(private dialog: MatDialog,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.openDialog();
  }

  private openDialog(): void {
    this.dialogRef = this.dialog.open(ModalComponent,
      {
        minWidth: '700px',
        minHeight: '400px'
      });

    this.dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        if (this.closedOnDestroy) {
          return;
        }
        return this.router.navigate(['map']);
      });
  }

  public ngOnDestroy(): void {
    this.closedOnDestroy = true;
    this.dialogRef.close();
  }

}
