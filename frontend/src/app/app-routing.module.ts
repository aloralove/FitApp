import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';import { CalendarComponent } from './calendar/calendar.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { NutritionComponent } from './nutrition/nutrition.component';

import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { DetailchallengeComponent } from './detailchallenge/detailchallenge.component';
import { DetailnutritionComponent } from './detailnutrition/detailnutrition.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: WorkoutDetailComponent }, 
  { path: 'detailchallenge/:id', component: DetailchallengeComponent }, 
  { path: 'detailnutrition/:id', component: DetailnutritionComponent }, 
  { path: 'workout', component: WorkoutComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'challenges', component: ChallengesComponent},
  { path: 'nutrition', component: NutritionComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }





