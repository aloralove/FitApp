import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Workouts } from '../workouts';
import { WorkoutService } from '../workouts.service';
import { ChallengesList } from '../challengesList';
import { ChallengesListService } from '../challengesList.service';
import { NutritionList } from '../nutritionList';
import { NutritionListService } from '../nutritionList.service';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})

export class WorkoutDetailComponent implements OnInit {
  
  workouts: Workouts | undefined;
  challengesList: ChallengesList | undefined;
  nutritionList: NutritionList | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private workoutService: WorkoutService,
    private challengesListService: ChallengesListService,
    private nutritionListService: NutritionListService
  ) { }

  ngOnInit(): void {
    this.getWorkouts();
    this.getNutritionList();
    this.getChallengesList();
  }

  getWorkouts(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.workoutService.getWorkouts(id)
      .subscribe(workouts => this.workouts = workouts);
  }

  getNutritionList(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.nutritionListService.getNutritionList(id)
      .subscribe(nutritionList => this.nutritionList = nutritionList);
  }

  getChallengesList(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.challengesListService.getChallengesList(id)
      .subscribe(challengesList => this.challengesList = challengesList);
  }

  goBack(): void {
    this.location.back();
  }

}