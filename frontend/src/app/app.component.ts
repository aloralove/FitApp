import { catchError, of, switchMap, tap } from 'rxjs'

import { Component } from '@angular/core'

import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get in shape!';

  constructor(userService: UserService) {

    userService.getUsers().pipe( // Get all users
      tap(users => console.log(users)),
      switchMap(users => {

        const user = { ...users[0] }

        user.firstName += 'seph'

        return userService.updateUser(user) // Make a change to the first user
      }),
      catchError(() => {
        console.warn('Could not update user that does not exist')
        return of([])
      }),
      switchMap(() => userService.getUsers()), // Get all users
      tap(users => console.log(users)),
      switchMap(users => userService.deleteUser(users[0])), // Delete first user
      catchError(() => {
        console.warn('Could not delete user that does not exist')
        return of([])
      }),
      switchMap(() => userService.getUsers()), // Get all users
      tap(users => console.log(users)),
    ).subscribe()

  }
}
