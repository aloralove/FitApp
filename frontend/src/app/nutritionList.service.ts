import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

type NutritionList = {
  id: number
  name: string
  recipe: string 
}

@Injectable({ 
  providedIn: 'root' 
})
export class NutritionListService {
  
    constructor(private _http: HttpClient) { }
  
    createNutritionList(nutritionList: NutritionList) {
      const url = `http://localhost:3000/nutritionList/`
  
      return this._http.post<NutritionList>(url, nutritionList, options)
    }
  
    deleteNutritionList(nutritionList: NutritionList) {
      const url = `http://localhost:3000/nutritionList/${nutritionList.id}`
  
      return this._http.delete<number>(url, options)
    }
  
    getNutritionList(nutritionListID: number) {
      const url = `http://localhost:3000/nutritionList/${nutritionListID}`
  
      return this._http.get<NutritionList>(url, options)
    }
  
    getNutritionLists() {
      const url = `http://localhost:3000/nutritionLists/`
  
      return this._http.get<NutritionList[]>(url, options)
    }
  
    updateNutritionList(nutritionList: NutritionList) {
      const url = `http://localhost:3000/nutritionList/${nutritionList.id}`
  
      return this._http.put<number>(url, nutritionList, options)
    }
  }