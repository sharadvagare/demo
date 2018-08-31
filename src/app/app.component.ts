import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/about">About</a></li>
      <li><a routerLink="/template-form">template form</a></li>
      
    </ul>

    <h1>App component</h1>

    <router-outlet></router-outlet>
  `,
})
// <user></user>
export class AppComponent {
  title = 'app';
  email = 'sharad.vagare@gmail.com';
  address = {
    street : 'dp road',
    city : 'Pune',
    state : 'Maharastra'
  };
}


//templateUrl: './app.component.html',



/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
*/
