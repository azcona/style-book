import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'style-book';
  currentTheme = 'sw-theme';

  changeTheme(newThemeName: any) {
    console.log(newThemeName);
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(this.currentTheme);
    body.classList.add(newThemeName);
    this.currentTheme = newThemeName;
  }

}
