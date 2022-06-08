import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Workout } from '../workout';
import { WorkoutService } from '../workout.service';
import { Detail } from '../detail';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-workouts-detail',
  templateUrl: './detailworkout.component.html',
  styleUrls: ['./detailworkout.component.css']
})

export class WorkoutDetailComponent implements OnInit {
  

  workout: Workout;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private detailService: DetailService,
    private workoutService: WorkoutService
  ) { }

  ngOnInit(): void {
    this.getWorkouts();

  }


  getWorkouts(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.workoutService.getWorkouts()
        .subscribe(workouts => {
          console.log(workouts)
          this.workout = workouts.find(workout => workout.id == id)
        });
  }

  goBack(): void {
    this.location.back();
  }

}