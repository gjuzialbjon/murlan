import { Component } from '@angular/core';

@Component({
  selector: 'al-root',
  template: `
    <router-outlet></router-outlet>
    <al-cards></al-cards>
  `,
  styles: []
})
export class AppComponent {
  title = 'Murlan';
}
