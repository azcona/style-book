import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {DialogContentComponent} from "../dialog-content/dialog-content.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(public dialog: MatDialog) {}
  openDialog(dialogClass?: string) {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      maxWidth: 'var(--dialog-size)',
    });
  }
}
