import { Component, OnInit } from '@angular/core';

import { Workouts } from '../workouts';
import { WorkoutService } from '../workouts.service';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})

export class WorkoutComponent implements OnInit {
  workout: Workouts[] = [];
  todaysDate = new Date();

  constructor(
    private workoutService: WorkoutService,

    
    ) { }

  ngOnInit(): void {
    this.getWorkout();
  }

  getWorkout(): void {
    this.workoutService.getWorkoutss()
        .subscribe(workout => {
          console.log(workout)
          this.workout = workout
        });
  }


}