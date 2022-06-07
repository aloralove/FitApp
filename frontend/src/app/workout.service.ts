import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

type Workout = {
  id: number
  wo_name: string
}

@Injectable({ 
  providedIn: 'root' 
})
export class WorkoutService {
  constructor(private _http: HttpClient) { }
  
    createWorkout(workout: Workout) {
      const url = `http://localhost:3000/workouts/`
  
      return this._http.post<any>(url, workout, options)
    }
  
    deleteWorkout(workout: Workout) {
      const url = `http://localhost:3000/workout/${workout.id}`
  
      return this._http.delete<number>(url, options)
    }
  
    getWorkout(workoutID: number) {
      const url = `http://localhost:3000/workout/${workoutID}`
  
      return this._http.get<any>(url, options)
    }
  
    getWorkouts() {
      const url = `http://localhost:3000/workouts/`
  
      return this._http.get<any>(url, options)
    }
  
    updateWorkout(workout: Workout) {
      const url = `http://localhost:3000/workout/${workout.id}`
  
      return this._http.put<number>(url, workout, options)
    }
  }