import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Workout } from '../workout';
import { WorkoutService } from '../workout.service';
import { Detail } from '../detail';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-workouts-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})

export class WorkoutDetailComponent implements OnInit {
  
  detail: Detail | undefined;
  workout: Workout[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private detailService: DetailService,
    private workoutService: WorkoutService
  ) { }

  ngOnInit(): void {
    this.getWorkouts();
    this.getDetails();
  }

  getDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.detailService.getDetails()
      .subscribe(detail => {
        console.log(detail)
        this.detail = detail
      });
  }

  getWorkouts(): void {
    this.workoutService.getWorkouts()
        .subscribe(workout => {
          console.log(workout)
          this.workout = workout
        });
  }

  goBack(): void {
    this.location.back();
  }

}