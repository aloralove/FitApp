import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Workouts } from '../workouts';
import { WorkoutService } from '../workouts.service';
import { Detail } from '../detail';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})

export class WorkoutDetailComponent implements OnInit {
  
  detail: Detail[] = [];
  workout: Workouts[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private detailService: DetailService,
    private workoutService: WorkoutService
  ) { }

  ngOnInit(): void {
    this.getWorkout();
    this.getDetails();
  }

  getDetails(): void {
    this.detailService.getDetails()
      .subscribe(detail => {
        this.detail = detail
      });
  }

  getWorkout(): void {
    this.workoutService.getWorkoutss()
        .subscribe(workout => {
          console.log(workout)
          this.workout = workout
        });
  }

  goBack(): void {
    this.location.back();
  }

}