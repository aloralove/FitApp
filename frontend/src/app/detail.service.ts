import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

type Detail = {
  id: number
  title: string
  content: string
}


@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private _http: HttpClient) { }

  createDetail(detailList: Detail) {
    const url = `http://localhost:3000/details/`

    return this._http.post<any>(url, detailList, options)
  }

  deleteDetail(detailList: Detail) {
    const url = `http://localhost:3000/detail/${detailList.id}`

    return this._http.delete<number>(url, options)
  }

  getDetail(detailListID: number) {
    const url = `http://localhost:3000/detail/${detailListID}`

    return this._http.get<any>(url, options)
  }

  getDetails() {
    const url = `http://localhost:3000/details/`

    return this._http.get<any>(url, options)
  }

  updateDetail(detailList: Detail) {
    const url = `http://localhost:3000/detail/${detailList.id}`

    return this._http.put<number>(url, detailList, options)
  }
}

