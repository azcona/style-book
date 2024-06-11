import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})


export class ToolbarComponent {
  bloques = [
    { color: 'unthemed', title: 'Unthemed Simple' },
    { color: 'primary', title: 'Primary Simple' },
    { color: 'accent', title: 'Accent Simple' },
    { color: 'error', title: 'Error Simple' }
  ];
}
