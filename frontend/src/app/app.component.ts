import { catchError, of, switchMap, tap } from 'rxjs'

import { Component } from '@angular/core'

import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todaysDate = new Date();
  title = 'Get in shape!';

  constructor( ) {

  }
}
