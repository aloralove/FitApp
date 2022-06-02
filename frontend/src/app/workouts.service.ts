import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

type Workouts = {
  id: number
  wo_name: string
}

@Injectable({ 
  providedIn: 'root' 
})
export class WorkoutService {
  constructor(private _http: HttpClient) { }
  
    createWorkouts(workouts: Workouts) {
      const url = `http://localhost:3000/workoutss/`
  
      return this._http.post<any>(url, workouts, options)
    }
  
    deleteWorkouts(workouts: Workouts) {
      const url = `http://localhost:3000/workouts/${workouts.id}`
  
      return this._http.delete<number>(url, options)
    }
  
    getWorkouts(workoutsID: number) {
      const url = `http://localhost:3000/workouts/${workoutsID}`
  
      return this._http.get<any>(url, options)
    }
  
    getWorkoutss() {
      const url = `http://localhost:3000/workoutss/`
  
      return this._http.get<any>(url, options)
    }
  
    updateWorkouts(workouts: Workouts) {
      const url = `http://localhost:3000/workouts/${workouts.id}`
  
      return this._http.put<number>(url, workouts, options)
    }
  }