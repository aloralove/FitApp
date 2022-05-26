import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Workouts } from './workouts';
import { WORKOUTS } from './mock-workouts';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class WorkoutService {

  constructor(private messageService: MessageService) { }

  getWorkout(): Observable<Workouts[]> {
    const workout = of(WORKOUTS);
    this.messageService.add('WorkoutService: fetched workout');
    return workout;
  }

  getWorkouts(id: number): Observable<Workouts> {
    // For now, assume that a workouts with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const workouts = WORKOUTS.find(w => w.id === id)!;
    this.messageService.add(`WorkoutService: fetched workouts id=${id}`);
    return of(workouts);
  }

}