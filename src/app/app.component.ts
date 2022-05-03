import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes'; // interpolação - html do componente puxa um dado do componente
  name = 'Pedro Domingues'
}
