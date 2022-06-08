import { Component, OnInit } from '@angular/core';

import { Workout } from '../workout';
import { WorkoutService } from '../workout.service';
import { Detail } from '../detail';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})

export class WorkoutComponent implements OnInit {
  detail: Detail[] = [];
  workouts: Workout[] = [];
  route: any;


  constructor(
    private workoutService: WorkoutService,
    private detailService: DetailService

    
    ) { }

  ngOnInit(): void {
    this.getWorkout();
    this.getDetails();
  }

  getWorkout(): void {
    this.workoutService.getWorkouts()
        .subscribe(workout => {
          console.log(workout)
          this.workouts = workout
        });
  }

  getDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.detailService.getDetails()
      .subscribe(detail => {
        this.detail = detail
      });
  }


}