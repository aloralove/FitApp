import { Component, OnInit } from '@angular/core';
import { Workout } from '../workout';
import { WorkoutService } from '../workout.service';
import { ChallengesList } from '../challengesList';
import { ChallengesListService } from '../challengesList.service';
import { NutritionList } from '../nutritionList';
import { NutritionListService } from '../nutritionList.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  workout: Workout[] = [];
  challenges: ChallengesList[] = [];
  nutrition: NutritionList[] = [];

  constructor(
    private workoutService: WorkoutService,
    private challengesListService: ChallengesListService,
    private nurtitionListService: NutritionListService,
    ) { }

  ngOnInit(): void {
    this.getWorkout();
    this.getChallenges();
    this.getNutrition();
  }

  getWorkout(): void {
    this.workoutService.getWorkouts()
      .subscribe(workout => {
        console.log(workout)
        this.workout = workout.slice(1, 4)
      });
  }

  getChallenges(): void {
    this.challengesListService.getChallengesLists()
        .subscribe(challenges => {
          console.log(challenges)
          this.challenges = challenges.slice(1, 4)
        });
  }

  getNutrition(): void {
    this.nurtitionListService.getNutritionLists()
        .subscribe(nutrition => {
          console.log(nutrition)
          this.nutrition = nutrition.slice(1, 4)
        });
  }

}
