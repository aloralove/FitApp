import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

type ChallengesList = {
  id: number
  name: string
}

@Injectable({ 
  providedIn: 'root' 
})
export class ChallengesListService {

  constructor(private _http: HttpClient) { }

  createChallengesList(challengesList: ChallengesList) {
    const url = `http://localhost:3000/challengesList/`

    return this._http.post<ChallengesList>(url, challengesList, options)
  }

  deleteChallengesList(challengesList: ChallengesList) {
    const url = `http://localhost:3000/challengesList/${challengesList.id}`

    return this._http.delete<number>(url, options)
  }

  getChallengesList(challengesListID: number) {
    const url = `http://localhost:3000/challengesList/${challengesListID}`

    return this._http.get<ChallengesList>(url, options)
  }

  getChallengesLists() {
    const url = `http://localhost:3000/challengesLists/`

    return this._http.get<ChallengesList[]>(url, options)
  }

  updateChallengesList(challengesList: ChallengesList) {
    const url = `http://localhost:3000/challengesList/${challengesList.id}`

    return this._http.put<number>(url, challengesList, options)
  }


}