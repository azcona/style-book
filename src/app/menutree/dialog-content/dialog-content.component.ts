import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent {
  items = [
    { id: 1, text: 'Secondary line 1' },
    { id: 2, text: 'Secondary line 2' },
    { id: 3, text: 'Secondary line 3' }
  ];
}
