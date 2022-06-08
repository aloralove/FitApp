import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

type ChallengesList = {
  id: number
  ch_name: string
  img: string
}

@Injectable({ 
  providedIn: 'root' 
})
export class ChallengesListService {

  constructor(private _http: HttpClient) { }

  createChallengesList(challengesList: ChallengesList) {
    const url = `http://localhost:3000/challenges/`

    return this._http.post<any>(url, challengesList, options)
  }

  deleteChallengesList(challengesList: ChallengesList) {
    const url = `http://localhost:3000/challenge/${challengesList.id}`

    return this._http.delete<number>(url, options)
  }

  getChallengesList(challengesListID: number) {
    const url = `http://localhost:3000/challenge/${challengesListID}`

    return this._http.get<any>(url, options)
  }

  getChallengesLists() {
    const url = `http://localhost:3000/challenges/`

    return this._http.get<any>(url, options)
  }

  updateChallengesList(challengesList: ChallengesList) {
    const url = `http://localhost:3000/challenge/${challengesList.id}`

    return this._http.put<number>(url, challengesList, options)
  }


}