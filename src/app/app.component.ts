import {Component} from '@angular/core';

@Component({
  selector: 'nk-root',
  template: `
    <div class="container">
      <img src="assets/logo.png">
      <h1 class="display-1">{{title}}</h1>
    </div>`,
  styles  : ['div {text-align: center}']
})
export class AppComponent {
  title = 'Angular Workshops Seed 2017';
}
