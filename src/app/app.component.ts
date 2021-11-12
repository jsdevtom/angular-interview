import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-interview';

  navigationItems = [
    {text: 'Hotels', link: './hotels'},
  ]

  constructor() {
  }

  onSuperUserModeClick() {
    this.navigationItems.push(
      {text: 'Users', link: './users'},
    );
  }
}
