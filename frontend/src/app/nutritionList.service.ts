import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

type NutritionList = {
  id: number
  nu_name: string
}

@Injectable({ 
  providedIn: 'root' 
})
export class NutritionListService {
  
    constructor(private _http: HttpClient) { }
  
    createNutritionList(nutritionList: NutritionList) {
      const url = `http://localhost:3000/nutritions/`
  
      return this._http.post<any>(url, nutritionList, options)
    }
  
    deleteNutritionList(nutritionList: NutritionList) {
      const url = `http://localhost:3000/nutrition/${nutritionList.id}`
  
      return this._http.delete<number>(url, options)
    }
  
    getNutritionList(nutritionListID: number) {
      const url = `http://localhost:3000/nutrition/${nutritionListID}`
  
      return this._http.get<any>(url, options)
    }
  
    getNutritionLists() {
      const url = `http://localhost:3000/nutritions/`
  
      return this._http.get<any>(url, options)
    }
  
    updateNutritionList(nutritionList: NutritionList) {
      const url = `http://localhost:3000/nutrition/${nutritionList.id}`
  
      return this._http.put<number>(url, nutritionList, options)
    }
  }