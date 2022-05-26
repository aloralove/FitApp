import { Component, OnInit } from '@angular/core';
import { Workouts } from '../workouts';
import { WorkoutService } from '../workouts.service';
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

  workout: Workouts[] = [];
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
    this.workoutService.getWorkout()
      .subscribe(workout => this.workout = workout.slice(1, 5));
  }

  getChallenges(): void {
    this.challengesListService.getChallengesLists()
        .subscribe(challenges => this.challenges = challenges.slice(1, 5));
  }

  getNutrition(): void {
    this.nurtitionListService.getNutrition()
        .subscribe(nutrition => this.nutrition = nutrition.slice(1, 5));
  }

}
