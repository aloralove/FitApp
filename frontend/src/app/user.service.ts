import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

type User = {
  id: number
  firstName: string
  lastName: string
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  createUser(user: User) {
    const url = `http://localhost:3000/user/`

    return this._http.post<User>(url, user, options)
  }

  deleteUser(user: User) {
    const url = `http://localhost:3000/user/${user.id}`

    return this._http.delete<number>(url, options)
  }

  getUser(userID: number) {
    const url = `http://localhost:3000/user/${userID}`

    return this._http.get<User>(url, options)
  }

  getUsers() {
    const url = `http://localhost:3000/users/`

    return this._http.get<User[]>(url, options)
  }

  updateUser(user: User) {
    const url = `http://localhost:3000/user/${user.id}`

    return this._http.put<number>(url, user, options)
  }
}
